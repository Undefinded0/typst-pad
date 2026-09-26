# Typst Pad – Einrichtung

## 1. Einmalig am PC: App online stellen (kostenlos)
1. Auf github.com ein **neues Repository** anlegen, z. B. `typst-pad`. Es muss öffentlich sein, weil GitHub Pages nur für öffentliche Repos kostenlos ist. Deine Dokumente liegen NICHT hier, nur die App.
2. Im Repo **Add file → Upload files** wählen, alle Dateien aus diesem Ordner markieren (es gibt keine Unterordner) und hochladen, dann **Commit changes**.
3. Im Repo **Settings → Pages** öffnen und dort **Source: „Deploy from a branch“ → Branch `main`, Ordner `/ (root)` → Save** einstellen.
4. Nach 1–2 Minuten ist die App erreichbar unter `https://DEINNAME.github.io/typst-pad/`.

## 2. Auf dem iPad installieren
1. Die Adresse **in Safari** öffnen und warten, bis rechts die Vorschau erscheint. Beim ersten Mal werden etwa 20 MB geladen.
2. Auf **Teilen → „Zum Home-Bildschirm“** tippen und dabei „Als Web-App öffnen“ aktiviert lassen.
3. Ab jetzt immer über das Symbol auf dem Home-Bildschirm starten. So gibt es keine Safari-Leiste und kein Mitscrollen, und die App funktioniert offline.

## 3. Mit deinem Typst-Repository verbinden
1. Einen Token erstellen: github.com → Settings → Developer settings → **Fine-grained tokens → Generate new token**.
   - Repository access: **Only select repositories** → dein Typst-Repo auswählen.
   - Unter Permissions → Repository permissions → **Contents: Read and write** wählen.
2. In Typst Pad auf das Zahnrad tippen und Folgendes eintragen:
   - Repository: z. B. `https://github.com/DEINNAME/mein-typst-repo`. Liegen die Dateien in einem Unterordner, hängst du `/tree/main/ordner` an.
   - Den Token einfügen und auf **Speichern** tippen. Die Dateien werden sofort geholt.

## Arbeiten
- Der **Sync-Knopf** (Pfeile) holt die Änderungen vom PC und lädt deine iPad-Änderungen als einen Commit hoch. Die Zahl am Knopf zeigt, wie viele Änderungen noch nicht hochgeladen sind.
- Am PC arbeitest du wie gewohnt: vorher **Pull**, danach **Push**.
- Hast du dieselbe Datei auf beiden Geräten geändert, fragt die App nach, welche Fassung gilt. Die andere Fassung wird als Kopie mit dem Zusatz „(Konflikt Datum)“ gespeichert.
- Offline wird alles lokal gespeichert. Sobald du wieder online bist, tippst du auf den Sync-Knopf.
- Pakete (`@preview/...`) werden beim ersten Gebrauch geladen und danach offline aufbewahrt.
- Eigene Schriften: Lege `.ttf`- oder `.otf`-Dateien ins Projekt, dann werden sie automatisch verwendet.
- Tastatur-Kürzel:
  - ⌘S synchronisiert.
  - ⌘↩ kompiliert sofort.
  - Tab und ⇧Tab rücken ein und aus.

## Updates
Wenn du neue App-Dateien pushst, lädt die App sie beim nächsten Start im Hintergrund. Aktiv ist die neue Version dann ab dem übernächsten Start.
