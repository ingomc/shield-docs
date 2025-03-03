---
title: Sizing
description: Sizing-blabla
---

<!-- markdownlint-disable MD033 -->

# Sizing <!-- {docsify-ignore} -->

## Width

Basic: [Breakpoints](docs/basics?id=breakpoints)

Um bestimme feste Breiten angeben zu können gibt es folgende Utils:

Breakpoints Beispiel: `s:md:w-full`

<div class="demo__table--scrollable">
  <table class="table table--code">
    <thead class="table__sticky">
      <tr class="s:text-left">
        <th><div class="thead-border">Klasse</div></th>
        <th><div class="thead-border">Wert</div></th>
        <th><div class="thead-border">Beispiel</div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>s:w-px</td>
        <td><code>1px</code></td>
        <td><div class="demo__spaceline s:w-px"></div></td>
      </tr>
      <tr>
        <td>s:w-auto</td>
        <td><code>auto</code></td>
        <td><div class="demo__spaceline s:w-auto"></div></td>
      </tr>
      <tr>
        <td>s:w-full</td>
        <td><code>100%</code></td>
        <td><div class="demo__spaceline s:w-full"></div></td>
      </tr>
      <tr>
        <td>s:w-0</td>
        <td><code>0</code></td>
        <td><div class="demo__spaceline s:w-0"></div></td>
      </tr>
      <tr>
        <td>s:w-1</td>
        <td><code>var(--size-1) | 4px</code></td>
        <td><div class="demo__spaceline s:w-1"></div></td>
      </tr>
      <tr>
        <td>s:w-2</td>
        <td><code>var(--size-2) | 8px</code></td>
        <td><div class="demo__spaceline s:w-2"></div></td>
      </tr>
      <tr>
        <td>s:w-3</td>
        <td><code>var(--size-3) | 12px</code></td>
        <td><div class="demo__spaceline s:w-3"></div></td>
      </tr>
      <tr>
        <td>s:w-4</td>
        <td><code>var(--size-4) | 16px</code></td>
        <td><div class="demo__spaceline s:w-4"></div></td>
      </tr>
      <tr>
        <td>s:w-5</td>
        <td><code>var(--size-5) | 20px</code></td>
        <td><div class="demo__spaceline s:w-5"></div></td>
      </tr>
      <tr>
        <td>s:w-6</td>
        <td><code>var(--size-6) | 24px</code></td>
        <td><div class="demo__spaceline s:w-6"></div></td>
      </tr>
      <tr>
        <td>s:w-7</td>
        <td><code>var(--size-7) | 28px</code></td>
        <td><div class="demo__spaceline s:w-7"></div></td>
      </tr>
      <tr>
        <td>s:w-8</td>
        <td><code>var(--size-8) | 32px</code></td>
        <td><div class="demo__spaceline s:w-8"></div></td>
      </tr>
      <tr>
        <td>s:w-9</td>
        <td><code>var(--size-9) | 36px</code></td>
        <td><div class="demo__spaceline s:w-9"></div></td>
      </tr>
      <tr>
        <td>s:w-10</td>
        <td><code>var(--size-10) | 40px</code></td>
        <td><div class="demo__spaceline s:w-10"></div></td>
      </tr>
      <tr>
        <td>s:w-11</td>
        <td><code>var(--size-11) | 44px</code></td>
        <td><div class="demo__spaceline s:w-11"></div></td>
      </tr>
      <tr>
        <td>s:w-12</td>
        <td><code>var(--size-12) | 48px</code></td>
        <td><div class="demo__spaceline s:w-12"></div></td>
      </tr>
      <tr>
        <td>s:w-14</td>
        <td><code>var(--size-14) | 56px</code></td>
        <td><div class="demo__spaceline s:w-14"></div></td>
      </tr>
      <tr>
        <td>s:w-16</td>
        <td><code>var(--size-16) | 64px</code></td>
        <td><div class="demo__spaceline s:w-16"></div></td>
      </tr>
      <tr>
        <td>s:w-20</td>
        <td><code>var(--size-20) | 80px</code></td>
        <td><div class="demo__spaceline s:w-20"></div></td>
      </tr>
      <tr>
        <td>s:w-24</td>
        <td><code>var(--size-24) | 96px</code></td>
        <td><div class="demo__spaceline s:w-24"></div></td>
      </tr>
      <tr>
        <td>s:w-28</td>
        <td><code>var(--size-28) | 112px</code></td>
        <td><div class="demo__spaceline s:w-28"></div></td>
      </tr>
      <tr>
        <td>s:w-32</td>
        <td><code>var(--size-32) | 128px</code></td>
        <td><div class="demo__spaceline s:w-32"></div></td>
      </tr>
    </tbody>
  </table>
</div>

## Height

Basic: [Breakpoints](docs/basics?id=breakpoints)

Um bestimme feste Höhen angeben zu können gibt es folgende Utils:

Breakpoints Beispiel: `s:md:h-full`

<div class="demo__table--scrollable">
  <table class="table table--code">
    <thead class="table__sticky">
      <tr class="s:text-left">
        <th><div class="thead-border">Klasse</div></th>
        <th><div class="thead-border">Wert</div></th>
        <th><div class="thead-border">Beispiel</div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>s:h-px</td>
        <td><code>1px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-px"></div></td>
      </tr>
      <tr>
        <td>s:h-auto</td>
        <td><code>auto</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-auto"></div></td>
      </tr>
      <tr>
        <td>s:h-full</td>
        <td><code>100%</code>  (relativ zum Container)</td>
        <td><div class="s:h-32"><div class="demo__spaceline s:w-6 s:h-full"></div></div></td>
      </tr>
      <tr>
        <td>s:min-h-full</td>
        <td><code>min-height: 100%</code> (relativ zum Container)</td>
        <td><div class="s:h-32"><div class="demo__spaceline s:w-6 s:min-h-full"></div></div></td>
      </tr>
      <tr>
        <td>s:min-h-dvh</td>
        <td><code>min-height: 100dvh</code> Dynamic Viewport Height (Die echte Browserhöhe ohne/mit Browsertoolbar)</td>
        <td><div class="demo__spaceline s:w-6 s:min-h-dvh"></div></td>
      </tr>
      <tr>
        <td>s:h-0</td>
        <td><code>0</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-0"></div></td>
      </tr>
      <tr>
        <td>s:h-1</td>
        <td><code>var(--size-1) | 4px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-1"></div></td>
      </tr>
      <tr>
        <td>s:h-2</td>
        <td><code>var(--size-2) | 8px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-2"></div></td>
      </tr>
      <tr>
        <td>s:h-3</td>
        <td><code>var(--size-3) | 12px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-3"></div></td>
      </tr>
      <tr>
        <td>s:h-4</td>
        <td><code>var(--size-4) | 16px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-4"></div></td>
      </tr>
      <tr>
        <td>s:h-5</td>
        <td><code>var(--size-5) | 20px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-5"></div></td>
      </tr>
      <tr>
        <td>s:h-6</td>
        <td><code>var(--size-6) | 24px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-6"></div></td>
      </tr>
      <tr>
        <td>s:h-7</td>
        <td><code>var(--size-7) | 28px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-7"></div></td>
      </tr>
      <tr>
        <td>s:h-8</td>
        <td><code>var(--size-8) | 32px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-8"></div></td>
      </tr>
      <tr>
        <td>s:h-9</td>
        <td><code>var(--size-9) | 36px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-9"></div></td>
      </tr>
      <tr>
        <td>s:h-10</td>
        <td><code>var(--size-10) | 40px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-10"></div></td>
      </tr>
      <tr>
        <td>s:h-11</td>
        <td><code>var(--size-11) | 44px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-11"></div></td>
      </tr>
      <tr>
        <td>s:h-12</td>
        <td><code>var(--size-12) | 48px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-12"></div></td>
      </tr>
      <tr>
        <td>s:h-14</td>
        <td><code>var(--size-14) | 56px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-14"></div></td>
      </tr>
      <tr>
        <td>s:h-16</td>
        <td><code>var(--size-16) | 64px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-16"></div></td>
      </tr>
      <tr>
        <td>s:h-20</td>
        <td><code>var(--size-20) | 80px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-20"></div></td>
      </tr>
      <tr>
        <td>s:h-24</td>
        <td><code>var(--size-24) | 96px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-24"></div></td>
      </tr>
      <tr>
        <td>s:h-28</td>
        <td><code>var(--size-28) | 112px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-28"></div></td>
      </tr>
      <tr>
        <td>s:h-32</td>
        <td><code>var(--size-32) | 128px</code></td>
        <td><div class="demo__spaceline s:w-6 s:h-32"></div></td>
      </tr>
    </tbody>
  </table>
</div>
