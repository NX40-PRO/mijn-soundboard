# Mijn Soundboard

Gratis browser-soundboard voor GitHub Pages.

## Geluiden toevoegen

1. Zet je audio in de map `sounds`.
2. Gebruik simpele bestandsnamen zonder spaties, bijvoorbeeld `applaus.mp3`.
3. Open `sounds.json` en voeg een blok toe:

```json
{
  "title": "Applaus",
  "file": "sounds/applaus.mp3",
  "category": "Reacties",
  "emoji": "👏",
  "shortcut": "2"
}
```

Let op: na het uploaden kan GitHub Pages soms even nodig hebben voordat de wijziging zichtbaar is.

## GitHub Pages aanzetten

1. Open je repository op GitHub.
2. Ga naar **Settings**.
3. Ga naar **Pages**.
4. Kies bij **Build and deployment** voor **Deploy from a branch**.
5. Kies branch **main** en folder **/root**.
6. Klik **Save**.

Daarna krijg je een link zoals:

`https://jouwgebruikersnaam.github.io/mijn-soundboard/`
