// Offline shell for Typst Pad. Compiler, fonts and packages are cached by the worker.
const SHELL = 'typstpad-shell-v1';
const ASSETS = 'typstpad-assets-0.7.0';
const SHELL_FILES = ['./', './index.html', './worker.js', './manifest.webmanifest', './icon-180.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if ((k.startsWith('typstpad-shell-') && k !== SHELL) || (k.startsWith('typstpad-assets-') && k !== ASSETS)) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // GitHub API and packages are handled elsewhere

  if (/\.(gz|otf|ttf)$/i.test(url.pathname)) {
    e.respondWith(caches.open(ASSETS).then(async c => (await c.match(req.url)) || fetch(req)));
    return;
  }
  // App shell: answer from cache instantly, refresh it in the background.
  e.respondWith((async () => {
    const cache = await caches.open(SHELL);
    const key = req.mode === 'navigate' ? './index.html' : req;
    const hit = await cache.match(key, { ignoreSearch: true });
    const refresh = fetch(req, { cache: 'no-cache' }).then(res => {
      if (res.ok) cache.put(key, res.clone());
      return res;
    }).catch(() => null);
    if (hit) { e.waitUntil(refresh); return hit; }
    return (await refresh) || new Response('Offline und noch nicht gespeichert.', { status: 503, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  })());
});
