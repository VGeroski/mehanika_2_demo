# Mehanika 2 (WebGL)

Statička WebGL2 / JavaScript verzija simulacije sfernog kretanja. Isti zadaci kao C++ OpenGL projekat (`mehanika2-cpp`), spremna za **GitHub Pages**.

## Lokalni razvoj (čitljiv izvor)

```text
python serve.py
```

Otvara http://127.0.0.1:8080/ (Ctrl+C za stop). Opcije: `python serve.py -p 9000`, `python serve.py --no-browser`.

## Build za javni git (minifikovano + obfuscirano)

Izvorni `js/` ne ide na javni repo. Build pravi `dist/` sa jednim teško čitljivim `app.min.js`:

```text
npm install
npm run build
python serve.py --root dist
```

**Javni GitHub Pages workflow**

1. Privatni repo (ili lokalno): drži ceo projekat + izvor.
2. Javni repo: push **samo sadržaj** `dist/` (ne `js/`, ne `build.mjs`).
3. Pages → Source: branch `main`, folder `/` (root).
4. Stranica: `https://<user>.github.io/<repo>/`

Napomena: obfuskacija otežava čitanje, ali nije kriptografska zaštita — odlučan neko i dalje može da analizira.

## Kontrole

`1`–`4` ili meni · `SPACE` pauza · `R` reset · mis orbit · točak zoom · strelice kamera
