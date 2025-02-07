---
title: Übersicht
description: Bekomme hier den groben Überblick über alle Komponenten
---

## Willkommen im Shield Design System - Components

`Components` ist eine Sammlung von UI-Komponenten in Form von Webcomponents bzw. "Custom Elements" nach W3C-Standard. Generell steht jede entwickelte Komponente für jede Anwendung (TR, DSM, AEM, Kundenbereich, etc.) zur Verfügung.

### So kannst du Shield in deinem Projekt nutzen

Einzelteile von Theme und CSS-Framework können auch einzeln konsumiert werden, man muss also nicht immer alles von jedem Package konsumieren. wie das geht erfahrt ihr im **[CSS-Framework]() integration** oder im **[Theme]() integration**

```html
<!-- web components -->
<script type="module" src="/shield/components/1.4/lib/lib.esm.js"></script>
<link rel="stylesheet" href="/shield/components/1.4/stencil-cls.css" />

<!-- css-framework -->
<link rel="stylesheet" href="/shield/css-framework/1.4/css/all.css" />

<!-- mandant -->
<link rel="stylesheet" href="/shield/themes/1.4/huk24/theme.css" />

<s-button ...></s-button>
```

## Browsersupport

[Browserslist](https://browserslist.dev/?q=bGFzdCAzIHZlcnNpb25zIEFORCA%2BIDElLCBub3QgZGVhZA%3D%3D) `last 3 versions AND > 1%, not dead`

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Samsung-internet](https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png) |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 123+ ✔                                                                                              | 124+ ✔                                                                                                 | 123+ ✔                                                                                        | 17.3+ ✔                                                                                             | 24+ ✔                                                                                                                             |

Stand: 01.07.2024

:::note
Shield funktioniert auch mit älteren Browsern, aber wird nicht explizit mit alten Browsern getestet. Opera ignorieren wir komplett da unrelevant für unsere Nutzer.
:::
