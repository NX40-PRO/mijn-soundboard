# Mijn Soundboard

Gratis browser-soundboard voor GitHub Pages.

Deze versie bevat de Gijs-geluiden als knoppen 1 t/m 8.

## Bestanden

De website gebruikt deze hoofdmap:

```text
index.html
style.css
app.js
sounds.json
sounds/
```

De audiobestanden staan in de map `sounds`:

```text
sounds/gijs-01-papier-hier.mp3
sounds/gijs-02-dankuwel-dankuwel.mp3
sounds/gijs-03-vooruit-ik-vind-het-zo-lekker-jongens.mp3
sounds/gijs-04-oh-wat-lekker.mp3
sounds/gijs-05-danke-schon.mp3
sounds/gijs-06-hallo-hallo.mp3
sounds/gijs-07-scheet-oeh-pardon.mp3
sounds/gijs-08-hee-hallo-ligt-er-hier-papier-op-de-grond.mp3
```

## Knoppen

| Toets | Titel | Bestand |
|---|---|---|
| 1 | Papier hier | `sounds/gijs-01-papier-hier.mp3` |
| 2 | Dankuwel dankuwel | `sounds/gijs-02-dankuwel-dankuwel.mp3` |
| 3 | Vooruit, ik vind het zo lekker jongens | `sounds/gijs-03-vooruit-ik-vind-het-zo-lekker-jongens.mp3` |
| 4 | Oh wat lekker | `sounds/gijs-04-oh-wat-lekker.mp3` |
| 5 | Danke schön | `sounds/gijs-05-danke-schon.mp3` |
| 6 | Hallo hallo | `sounds/gijs-06-hallo-hallo.mp3` |
| 7 | Oeh pardon | `sounds/gijs-07-scheet-oeh-pardon.mp3` |
| 8 | Ligt er hier papier op de grond? | `sounds/gijs-08-hee-hallo-ligt-er-hier-papier-op-de-grond.mp3` |

## GitHub uploaden

1. Open je repository `mijn-soundboard` op GitHub.
2. Klik op **Add file**.
3. Kies **Upload files**.
4. Sleep alle bestanden en mappen uit deze map naar GitHub.
5. Klik op **Commit changes**.
6. Wacht daarna even tot GitHub Pages opnieuw gepubliceerd is.

Belangrijk: `index.html` moet direct in de hoofdmap van de repository staan.

Goed:

```text
mijn-soundboard/index.html
mijn-soundboard/sounds.json
mijn-soundboard/sounds/gijs-01-papier-hier.mp3
```

Fout:

```text
mijn-soundboard/mijn-soundboard-gijs/index.html
```

## GitHub Pages

Gebruik deze instellingen:

- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** /root

Je website staat daarna op:

```text
https://nx40-pro.github.io/mijn-soundboard/
```

## Geluid toevoegen

1. Zet een nieuw `.mp3`-bestand in de map `sounds`.
2. Gebruik een simpele bestandsnaam zonder spaties, bijvoorbeeld `nieuw-geluid.mp3`.
3. Voeg het bestand toe aan `sounds.json`.

Voorbeeld:

```json
{
  "title": "Nieuw geluid",
  "file": "sounds/nieuw-geluid.mp3",
  "category": "Gijs",
  "emoji": "🔊",
  "shortcut": "9"
}
```

Let op de komma tussen blokken in `sounds.json`.
