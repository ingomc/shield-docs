---
title: Position
description: Position-blabla
---

<!-- markdownlint-disable MD033 -->

# Position <!-- {docsify-ignore} -->

Utilities zur Steuerung der Platzierung von positionierten Elementen.

Mit den `top`/`right`/`bottom`/`left` Utils kann man die Elemente ausrichten, und mit den Spacing-Utils eventuelle Abstände einstellen.

<table class="table table--code">
  <thead class="table__sticky">
    <tr class="s:text-left">
      <th><div class="thead-border">Klasse</div></th>
      <th><div class="thead-border">CSS-Eigenschaften</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>s:static</code></td>
      <td><code>position: static;</code></td>
    </tr>
    <tr>
      <td><code>s:fixed</code></td>
      <td><code>position: fixed;</code></td>
    </tr>
    <tr>
      <td><code>s:sticky</code></td>
      <td><code>position: sticky;</code></td>
    </tr>
    <tr>
      <td><code>s:absolute</code></td>
      <td><code>position: absolute;</code></td>
    </tr>
    <tr>
      <td><code>s:relative</code></td>
      <td><code>position: relative;</code></td>
    </tr>
  </tbody>
</table>

### Wichtiger Hinweis: Verwendung von `position: sticky`

Wenn `position: sticky` in CSS nicht wie erwartet funktioniert, könnte dies an der Größe des DIREKT übergeordneten Containers liegen. Sticky-Elemente orientieren sich an dem Scrollbereich des nächsten übergeordneten Elements. Wenn dieser Container jedoch zu klein ist oder keinen Scrollbereich besitzt (z. B. wenn seine Höhe kleiner als der Viewport ist), wird das Sticky-Element nicht korrekt funktionieren.

<div class="demo">
  <div class="s:relative s:bg-dark s:border-radius-md s:p-4">
    <p>Relative parent</p>
    <div class="s:static s:bg-neutral s:border-radius-md s:p-4 s:h-32 s:flex s:flex-col s:justify-between">
      <p>Static parent</p>
      <div class="s:flex s:gap-4">
        <div class="s:absolute s:top-0 s:right-0 s:p-4 s:bg-neutral-subdued s:border-radius-md">
          <p>Absolute child</p>
        </div>
        <div class="s:p-4 s:bg-neutral-subdued s:border-radius-md">
          <p>Static sibling</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="s:relative ...">
  <p>Relative parent</p>
  <div class="s:static ...">
    <p>Static parent</p>
    <div class="...">
      <div class="s:absolute s:top-0 s:right-0 ...">
        <p>Absolute child</p>
      </div>
      <div class="...">
        <p>Static sibling</p>
      </div>
    </div>
  </div>
</div>
```

## Top / Right / Bottom / Left <!-- {docsify-ignore} -->

Utilities zur Steuerung der Positionierung eines Elements im DOM.

<table class="table table--code">
  <thead class="table__sticky">
    <tr class="s:text-left">
      <th><div class="thead-border">Klasse</div></th>
      <th><div class="thead-border">CSS-Eigenschaften</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>s:top-0</code></td>
      <td><code>top: 0;</code></td>
    </tr>
    <tr>
      <td><code>s:right-0</code></td>
      <td><code>right: 0;</code></td>
    </tr>
    <tr>
      <td><code>s:bottom-0</code></td>
      <td><code>bottom: 0;</code></td>
    </tr>
    <tr>
      <td><code>s:left-0</code></td>
      <td><code>left: 0;</code></td>
    </tr>
  </tbody>
</table>
