---
title: Willkommen im CSS-Framework
description: Starte deine Reise mit  unserem CSS-Framework
---

Das CSS-Framework hat das Ziel, den Produktteams zu ermöglichen eigene Kompositionen zu bauen, wenn diese nicht so allgemeingültig (Snowflakes) sind, dass es sinnvoll wäre diese als Shield-Webkomponente zur Verfügung zu stellen. Durch den Einsatz des Frameworks wird aber trotzdem sichergestellt, dass sich die so entstandenen Kompositionen bestmöglich in das Look and Feel der Marke integrieren.

Dies stellt letztlich einen guten Kompromiss zwischen Wiederverwendbarkeit und Qualität dar.

**Einbinden der CSS-Files:**

Im `<head>` des HTML-Dokuments müssen mindestens die beiden folgenden Dateien eingebunden werden. `all.css` enthält dabei alle hier Dokumentierten CSS-Styles. Innerhalb dieser werden mandantenspezifische Variablen und Styles verwendet, welche sich in der jew. `theme.css` befinden.

```html
<head>
  …
  <!-- Shield CSS -->
  <link href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/all.css" rel="stylesheet" />
  <link href="/shield$FEATURE-PATH/themes/$PATH-VERSION-THEME/MANDANT/theme.css" rel="stylesheet" />
  …
</head>
```

**Es könnten auch nur einzelne Teile verwendet werden:**

Für kleine oder sehr spezifische Projekte kann es sinnvoll sein, nicht das gesamte Framework einzubinden. Zu diesem Zweck besteht die Möglichkeit einzelteile des Frameworks einzeln einzubinden und eben andere weg zu lassen.

```html
<head>
  <link … href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/border.css" />
  <link … href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/grid.css" />
  <link … href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/spacing.css" />
  <link … href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/background.css" />
  <link … href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/text.css" />
  <link … href="/shield$FEATURE-PATH/css-framework/$PATH-VERSION/css/util.css" />
  <link … href="/shield$FEATURE-PATH/themes/$PATH-VERSION-THEME/MANDANT/theme.css" />
</head>
```

**Nutzung als NPM-Packages:**

```node
npm install @shield/css-framework --save
```
