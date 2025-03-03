---
title: Spacing
description: Spacing-blabla
---

<!-- markdownlint-disable MD033 -->

# Spacing <!-- {docsify-ignore} -->

## Spacing-Tokens

Basic: [Breakpoints](docs/basics?id=breakpoints)

<div class="demo__table--scrollable">
  <table class="table table--code">
    <thead class="table__sticky">
      <tr class="s:text-left">
        <th><div class="thead-border">Token</div></th>
        <th><div class="thead-border">Klasse</div></th>
        <th><div class="thead-border">Value</div></th>
        <th><div class="thead-border">Beispiel</div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-</td>
        <td>.s:m-a</td>
        <td>auto</td>
        <td>`s:m-a` Geht nur bei margin</td>
      </tr>
      <tr>
        <td>var(--spacing-0)</td>
        <td>.s:m-0</td>
        <td>0px</td>
        <td><div class="demo__spaceline demo__spaceline-0"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-1)</td>
        <td>.s:m-1</td>
        <td>4px</td>
        <td><div class="demo__spaceline demo__spaceline-1"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-2)</td>
        <td>.s:m-2</td>
        <td>8px</td>
        <td><div class="demo__spaceline demo__spaceline-2"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-3)</td>
        <td>.s:m-3</td>
        <td>12px</td>
        <td><div class="demo__spaceline demo__spaceline-3"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-4)</td>
        <td>.s:m-4</td>
        <td>16px</td>
        <td><div class="demo__spaceline demo__spaceline-4"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-5)</td>
        <td>.s:m-5</td>
        <td>20px</td>
        <td><div class="demo__spaceline demo__spaceline-5"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-6)</td>
        <td>.s:m-6</td>
        <td>24px</td>
        <td><div class="demo__spaceline demo__spaceline-6"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-7)</td>
        <td>.s:m-7</td>
        <td>28px</td>
        <td><div class="demo__spaceline demo__spaceline-7"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-8)</td>
        <td>.s:m-8</td>
        <td>32px</td>
        <td><div class="demo__spaceline demo__spaceline-8"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-9)</td>
        <td>.s:m-9</td>
        <td>36px</td>
        <td><div class="demo__spaceline demo__spaceline-9"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-10)</td>
        <td>.s:m-10</td>
        <td>40px</td>
        <td><div class="demo__spaceline demo__spaceline-10"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-11)</td>
        <td>.s:m-11</td>
        <td>44px</td>
        <td><div class="demo__spaceline demo__spaceline-11"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-12)</td>
        <td>.s:m-12</td>
        <td>48px</td>
        <td><div class="demo__spaceline demo__spaceline-12"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-14)</td>
        <td>.s:m-14</td>
        <td>56px</td>
        <td><div class="demo__spaceline demo__spaceline-14"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-16)</td>
        <td>.s:m-16</td>
        <td>64px</td>
        <td><div class="demo__spaceline demo__spaceline-16"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-20)</td>
        <td>.s:m-20</td>
        <td>80px</td>
        <td><div class="demo__spaceline demo__spaceline-20"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-24)</td>
        <td>.s:m-24</td>
        <td>96px</td>
        <td><div class="demo__spaceline demo__spaceline-24"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-28)</td>
        <td>.s:m-28</td>
        <td>112px</td>
        <td><div class="demo__spaceline demo__spaceline-28"></div></td>
      </tr>
      <tr>
        <td>var(--spacing-32)</td>
        <td>.s:m-32</td>
        <td>128px</td>
        <td><div class="demo__spaceline demo__spaceline-32"></div></td>
      </tr>
    </tbody>
  </table>
</div>

## Margin

Steuert den Außenabstand (margin) an jeder Seite eines Elements `m{t|r|b|l}-{size}`. Die Werte richten sich dabei nach den Spacing-Tokens: `s:m-2` --> `--spacing-2` --> `8px`.

`s:mt-6` fügt z.B. `24px (--spacing-6)` Abstand nach oben hinzu. `s:mr-4` fügt `16px (--spacing-4)` Abstand an der rechten Seite hinzu, Bei `s:mb-8` sind `32px` unterhalb des Elements und bei `s:ml-2` sind es `8px` an der linken Seite.

Alle diese Klassen sind auch mit breakpoint infixes verfügbar – Beispiel: `s:md:m-4`.
Außerdem ist für die Margin-Klassen der Wert `auto` nutzbar: `auto` -> `s:m-a` (`margin: auto`)

<div class="demo demo--flex demo--pd-0">
  <div class="demo__spacing-bg">
    <div class="demo__box demo__box--spacing-0 demo__box--centercontent s:m-4">
      <code>s:m-4</code>
    </div>
  </div>
  <div class="demo__flex-break"></div>
  <div class="demo__spacing-bg">
    <div class="demo__box demo__box--spacing-0 demo__box--centercontent s:mx-3">
      <code>s:mx-3</code>
    </div>
  </div>
  <div class="demo__flex-break"></div>
  <div class="demo__spacing-bg">
    <div class="demo__box demo__box--spacing-0 demo__box--centercontent s:my-3">
      <code>s:my-3</code>
    </div>
  </div>
  <div class="demo__flex-break"></div>
  <div class="demo__spacing-bg">
    <div class="demo__box demo__box--spacing-0 demo__box--centercontent s:ml-1 s:mt-3">
      <code>s:ml-1 s:mt-3</code>
    </div>
  </div>
  <div class="demo__flex-break"></div>
  <div class="demo__spacing-bg">
    <div class="demo__box demo__box--spacing-0 demo__box--centercontent s:ml-4 s:mb-5">
      <code>s:ml-4 s:mb-5</code>
    </div>
  </div>
  <div class="demo__flex-break"></div>
  <div class="demo__spacing-bg">
    <div class="demo__box demo__box--spacing-0 demo__box--centercontent s:ml-32">
      <code>s:ml-32</code>
    </div>
  </div>
</div>

```html
<div class="s:m-4"></div>
<div class="s:mx-3"></div>
<div class="s:my-3"></div>
<div class="s:ml-1 s:mt-3"></div>
<div class="s:ml-4 s:mb-5"></div>
<div class="s:ml-32"></div>
```

## Padding

Steuert den Innenabstand (padding) an jeder Seite eines Elements `p{t|r|b|l}-{size}`.
Der Wert `auto` ist für Padding **nicht** verfügbar. Sonst verhält sich alles analog zu margin.

<div class="demo demo--flex demo--pd-0">
  <div class="demo__box s:d-flex demo-w-auto demo-h-auto">
    <div class="demo__spacing-bg" style="width: 3rem;"></div>
    <code class="s:p-2 s:m-0">s:pl-3</code>
  </div>
  <div class="demo__box s:d-flex demo-w-auto demo-h-auto">
    <code class="s:p-2 s:m-0">s:pr-3</code>
    <div class="demo__spacing-bg" style="width: 3rem;"></div>
  </div>
  <div class="demo__box demo-w-auto demo-h-auto">
    <div class=" demo__spacing-bg demo-w-auto" style="height: 3rem;"></div>
    <code class="s:p-2 s:m-0 s:d-block">s:pt-3</code>
  </div>
  <div class="demo__box demo-w-auto demo-h-auto">
    <code class="s:p-2 m-0 s:d-block">s:pb-3</code>
    <div class=" demo__spacing-bg demo-w-auto" style="height: 3rem;"></div>
  </div>
  <div class="demo__box demo-w-auto demo-h-auto">
    <div class=" demo__spacing-bg s:p-3 demo-w-auto">
      <code class="s:p-2 s:m-0 s:d-block">s:p-3</code>
    </div>
  </div>
  <div class="demo__box demo-w-auto demo-h-auto">
    <div class=" demo__spacing-bg s:py-3 demo-w-auto">
      <code class="s:p-2 s:m-0 s:d-block">s:py-3</code>
    </div>
  </div>
  <div class="demo__box demo-w-auto demo-h-auto">
    <div class=" demo__spacing-bg s:px-3 demo-w-auto">
      <code class="s:p-2 s:m-0 s:d-block">s:px-3</code>
    </div>
  </div>
</div>

```html
<div class="s:pl-3"></div>
<div class="s:pr-3"></div>
<div class="s:pt-3"></div>
<div class="s:pb-3"></div>
<div class="s:p-3"></div>
<div class="s:py-3"></div>
<div class="s:px-3"></div>
```
