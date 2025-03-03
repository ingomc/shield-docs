---
title: Container
description: Container-blabla
---

# Container

API:

- `--container-width`: Maximalbreite z.B. `1080px`
- `--container-width-narrow`: Maximalbreite für schmalen Container z.B. `720px`
- `--container-spacing`: Außen/Sicherheitsabstand zum Bildschirmrand `16px`, `var(--spacing-4)`

## Default

Im Theme des jeweiligen Mandanten muss festgelegt sein, wie die Größen des jeweiligen Containers zu sein haben. Im Tarifrechner können andere Werte als im CMS Hinterlegt sein.
Bei größeren Viewports gibt es die max-width `--container-width` aus dem Theme.

**Breite:** Zum Bildschirmrand wird immer ein Abstand von `--spacing-4` eingehalten. Man kann das mit der CSS-Var `--container-spacing` global und lokal überschreiben falls notwendig.

<div class="demo demo--resizable">
  <div class="s:p-4 s:container s:bg-neutral-subdued">
    Dies ist ein normaler Container
  </div>
</div>

```html
<div class="s:container s:p-4">Dies ist ein normaler Container</div>
```

```css
.s:container {
  --_container-width: var(--container-width, 1080px);
  width: min(var(--_container-width), calc(100% - 2 * var(--container-spacing, var(--spacing-4))));
  margin-right: auto;
  margin-left: auto;
}
```

## Narrow

Im Theme ist die Breite für den kleineren Container via CSS-Var `--container-width-narrow` festgelegt.

<div class="demo demo--resizable">
  <div class="s:p-4 s:container-narrow s:bg-neutral-subdued">
    Kleinerer Container für z.b. Tarifrechner
  </div>
</div>

```html
<div class="s:container-narrow s:p-4">Kleinerer Container für z.b. Tarifrechner</div>
```

<div class="s:paper s:bg-highlight-subdued">
  <div class="s:p-4">
      <p>⚠️ Der Container selbst bringt weder zusätzlichen Außen- noch Innenabstand mit. Die Breite ist, wie Oben erwähnt, maximal Browserbreite mit Sicherheitsabstand nach außen. Auch das GRID-Element erzeugt keinen automatischen Außenabstand; dieser äußere Abstand muss manuell mithilfe von Utils wie <code>s:px-4</code> hinzugefügt werden.</p>
  </div>
</div>

(Hintergrundinfo: Bei verschachtelten und komplexeren Grids darf kein zusätzlicher Abstand vorhanden sein, da sonst Verschiebungen auftreten könnten und farbige Flächen möglicherweise nicht korrekt dargestellt werden.)

`CSS-Framework`

```css
.s:container-narrow {
  @include container-base();
  --_container-width: var(--container-width-narrow, var(--container-width));
}
```

`Theme` - `Tokens`

```css
--container-width-narrow: calc(
  (var(--container-width) - 13 * var(--grid-gap-x, var(--grid-base))) / 12 * 10 + 11 * var(
      --grid-gap-x,
      var(--grid-base)
    )
);
```
