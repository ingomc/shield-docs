---
title: Display
description: Display-blabla
---

<!-- markdownlint-disable MD033 -->

# Display & Visibility <!-- {docsify-ignore} -->

## Display

Mögliche Value: `hidden, inherit, block, list-item, flex, grid, inline, inline-block, inline-flex, table, inline-table`.
`flex` Property kann auch mit Breakpoints angewendet werden, die anderen Values nicht.

<div class="demo__table--scrollable">
  <table class="table table--code">
    <thead class="table__sticky">
      <tr class="s:text-left">
        <th><div class="thead-border">Class</div></th>
        <th><div class="thead-border">CSS Properties</div></th>
        <th><div class="thead-border">Beispiel</div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>s:d-hidden</td>
        <td>display: none;</td>
        <td class="s:text-center"><span class="s:d-hidden">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-inherit</td>
        <td>display: inherit;</td>
        <td class="s:text-center"><span class="s:d-inherit">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-block</td>
        <td>display: block;</td>
        <td class="s:text-center"><span class="s:d-block">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-flex `mit Breakpoints`</td>
        <td>display: flex;</td>
        <td class="s:text-center"><span class="s:d-flex">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-grid</td>
        <td>display: grid;</td>
        <td class="s:text-center"><span class="s:d-grid">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-list-item</td>
        <td>display: list-item;</td>
        <td class="s:text-center"><span class="s:d-list-item">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-inline</td>
        <td>display: inline;</td>
        <td class="s:text-center"><span class="s:d-inline">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-inline-block</td>
        <td>display: inline-block;</td>
        <td class="s:text-center"><span class="s:d-inline-block">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-inline-flex</td>
        <td>display: inline-flex;</td>
        <td class="s:text-center"><span class="s:d-inline-flex">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-table</td>
        <td>display: table;</td>
        <td class="s:text-center"><span class="s:d-table">🛡</span></td>
      </tr>
      <tr>
        <td>s:d-inline-table</td>
        <td>display: inline-table;</td>
        <td class="s:text-center"><span class="s:d-inline-table">🛡</span></td>
      </tr>
    </tbody>
  </table>
</div>

## Show or hide on Breakpoints

Klassen haben zu beginn immer den jew. Breakpoint, gefolgt von einem Doppeltpunkt und danach die gewünschte CSS-Eigenschaft z.B.: <code>s:md:d-hidden</code><br>

<div class="demo demo--resizable">
  <p class="s:d-hidden">Always hidden</p>
  <p class="s:d-flex">Always flex</p>
  <span class="s:xs:d-table s:sm:d-flex s:md:d-hidden s:lg:d-inherit s:xl:d-inline">
    Sample text
  </span>
  <br>
  <br>
  current display:
  <code class="s:xs:d-table s:sm:d-hidden">s:xs:d-table</code>
  <code class="s:d-hidden s:sm:d-inline-block s:md:d-hidden">s:sm:d-flex</code>
  <code class="s:d-hidden s:md:d-inline-block s:lg:d-hidden">s:md:d-hidden</code>
  <code class="s:d-hidden s:lg:d-inline-block s:xl:d-hidden">s:lg:d-inherit</code>
  <code class="s:d-hidden s:xl:d-inline">s:xl:d-inline</code>
</div>

```html
<p class="s:d-hidden">Always hidden</p>
<p class="s:d-flex">Always flex</p>
<span class="s:xs:d-table s:sm:d-flex s:md:d-hidden s:lg:d-inherit s:xl:d-inline">Sample text</span>
```

<table class="table">
  <tbody>
    <tr>
      <th>hidden below :md</th>
      <th>visible above :xs</th>
      <th>visible above :lg</th>
      <th>visible between :sm and :lg</th>
  </tr>
  <tr class="s:text-center">
    <td><span class="s:d-hidden s:md:d-block">✅<br>Beispiel</span><br><code>s:d-hidden s:md:d-block</code></td>
    <td><span class="s:d-hidden s:sm:d-block">✅<br>Beispiel</span><br><code>s:d-hidden s:sm:d-block</code></td>
    <td><span class="s:d-hidden s:lg:d-block">✅<br>Beispiel</span><br><code>s:d-hidden s:lg:d-block</code></td>
    <td><span class="s:d-hidden s:sm:d-block s:xl:d-hidden">✅<br>Beispiel</span><br><code>s:d-hidden s:sm:d-block .xl:d-hidden</code></td>
  </tr>
  </tbody>
</table>

```html
<td>
  <span class="s:d-hidden s:md:d-block">✅<br />Beispiel</span>
</td>
<td>
  <span class="s:d-hidden s:sm:d-block">✅<br />Beispiel</span>
</td>
<td>
  <span class="s:d-hidden s:lg:d-block">✅<br />Beispiel</span>
</td>
<td>
  <span class="s:d-hidden s:sm:d-block s:xl:d-hidden">✅<br />Beispiel</span><br />
</td>
```

## Visibility

Macht Elemente nur unsichtbar und beeinflusst den Dokumentfluß dabei nicht (im Gegensatz zu `dislay:none;`bzw. `.hidden`).

<div class="demo">
  <code class="">s:visible</code>
  <div class="s:border-xs">
    <span class="s:visible">visible</span>
  </div>
  <br>
  <code class="">s:invisible</code>
  <div class="s:border-xs">
    <span class="s:invisible">not visible</span>
  </div>
  <br>
  <code class="">s:d-hidden</code>
  <span class="s:d-hidden">not visible + no space consumed</span>
</div>

```html
<span class="s:visible">visible</span>
<span class="s:invisible">not visible</span>
<span class="s:d-hidden">not visible + no space consumed</span>
```

## Show or hide for Print

For hiding stuff when printing there are three classes `.print:d-hidden`, `.print:d-block`, `.print:d-inline`, `.print:d-inherit`

<div class="demo">
  <p class="s:print:d-hidden">
    This Text ist hidden when printing the page via class <code>s:print:d-hidden</code>.
  </p>
  <p class="s:d-hidden s:print:d-block">
    Print only.
  </p>
  <code>s:d-hidden s:print:d-block</code>
</div>
