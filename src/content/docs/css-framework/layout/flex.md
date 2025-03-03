---
title: Flex
description: Flex-blabla
---

<!-- markdownlint-disable MD033 -->

# Flex

### Breakpoints

Alle folgenden Utils haben auch die Breakpointsmodifier
Basic: [Breakpoints](docs/basics?id=breakpoints)

Standard flex Eigenschaften sind `nowrap` `row`.

<div class="demo demo--resizable">
  <div class="s:d-flex s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Flex ohne Abstand

Initial ist `gap` (16px/ var(--spacing-4)) definiert. Dieser kann mit `s:gap-0` entfernt werden. Siehe außerdem [Flex & Grid Gaps](docs/flex-and-grid?id=gap)

<div class="demo demo--resizable">
  <div class="s:d-flex s:gap-0 s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:gap-0 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Inline-Flex ohne Abstand

Initial ist `gap` (16px/ var(--spacing-4)) definiert. Dieser kann mit `s:gap-0` entfernt werden. Siehe außerdem [Flex & Grid Gaps](docs/flex-and-grid?id=gap)

<div class="demo demo--resizable">
  <div class="s:d-inline-flex s:gap-0 s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-inline-flex s:gap-0 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Flex Direction

| Klasse                                            | CSS-Eigenschaft                 |
| ------------------------------------------------- | ------------------------------- |
| `s:flex-row`                                      | flex-direction: row;            |
| `s:flex-row-reverse`                              | flex-direction: row-reverse;    |
| `s:flex-col` oder `s:flex-column`                 | flex-direction: column;         |
| `s:flex-col-reverse` oder `s:flex-column-reverse` | flex-direction: column-reverse; |

### Flex Direction mit Breakpoints

Basic: [Breakpoints](docs/basics?id=breakpoints)

Breakpoints Beispiel: `s:flex-column s:md:flex-row`

### Row

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-row s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Row-reverse

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-row-reverse s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-row-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-col s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-col ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column-reverse

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-column-reverse s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-column-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Flex-Wrap

| Klasse                | CSS-Eigenschaft          |
| --------------------- | ------------------------ |
| `s:flex-wrap`         | flex-wrap: wrap;         |
| `s:flex-wrap-reverse` | flex-wrap: wrap-reverse; |
| `s:flex-nowrap`       | flex-wrap: nowrap;       |

### Bricht nicht um

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-nowrap s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">01</div>
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">02</div>
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-nowrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Bricht normal um

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-wrap s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">01</div>
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">02</div>
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-wrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Bricht nach oben um

<div class="demo demo--resizable">
  <div class="s:d-flex s:flex-wrap-reverse s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">01</div>
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">02</div>
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width: 40%">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:flex-wrap-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Flex-Items

| Klasse           | CSS-Eigenschaft | Erklärungen                                                                          |
| ---------------- | --------------- | ------------------------------------------------------------------------------------ |
| `s:flex-1`       | flex: 1 1 0%;   | Erlaubt es dem Item größer oder kleiner zu werden, die initiale Größe wird ignoriert |
| `s:flex-auto`    | flex: 1 1 auto; | Item kann größer oder kleiner werden, hat aber einen Bezug zur initalen Größe        |
| `s:flex-initial` | flex: 0 1 auto; | Das Item kann kleiner werden, aber nicht größer als die initiale Größe               |
| `s:flex-none`    | flex: none;     | Verhindert eine Veränderung der Größe                                                |

### None und Initial

Die Größe von `none` wird nicht verändert. Die Größen der andere beiden Container nimmt mehr Platz ein als eigentlich da ist. Somit werden die beiden anderen Proportional in den Wrapper-Container gequetscht da sie `flex-initial` haben. Hätten alle `flex-none` würden die Container hinten aus der Zeile rauslaufen.

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:text-center demo__spacing-bg">
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width:128px">none</div>
    <div class="s:p-1 s:flex-initial s:bg-primary s:border-radius-sm" style="width:60%">initial: 60%</div>
    <div class="s:p-1 s:flex-initial s:bg-primary s:border-radius-sm" style="width:40%">initial: 40%</div>
  </div>
</div>

```html
<div class="s:d-flex">
  <div class="s:flex-none" style="width:128px">none</div>
  <div class="s:flex-initial" style="width:60%">initial: 60%</div>
  <div class="s:flex-initial" style="width:40%">initial: 40%</div>
</div>
```

### Flex-1

Initiale Größen werden ignoriert, der Container kann wachsen oder schrumpfen.

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:text-center demo__spacing-bg">
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm" style="width:192px">none: width:192px</div>
    <div class="s:p-1 s:flex-1 s:bg-primary s:border-radius-sm" style="width:192px">flex-1: width:192px</div>
    <div class="s:p-1 s:flex-1 s:bg-primary s:border-radius-sm" style="width:192px">flex-1: width:192px</div>
  </div>
</div>

```html
<div class="s:d-flex">
  <div class="s:flex-none" style="width:192px">none: width:192px</div>
  <div class="s:flex-1" style="width:192px">flex-1: width:192px</div>
  <div class="s:flex-1" style="width:192px">flex-1: width:192px</div>
</div>
```

### Auto

Items wachsen oder schrumpfen mit Bezug auf der initialen Größe

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:text-center demo__spacing-bg">
    <div class="s:p-1 s:flex-none s:bg-primary s:border-radius-sm">none</div>
    <div class="s:p-1 s:flex-auto s:bg-primary s:border-radius-sm" style="width:60%">flex-auto: width:60%</div>
    <div class="s:p-1 s:flex-auto s:bg-primary s:border-radius-sm" style="width:30%">flex-auto: width:30%</div>
  </div>
</div>

```html
<div class="s:d-flex">
  <div class="s:flex-none">none</div>
  <div class="s:flex-auto" style="width:60%">flex-auto: width:60%</div>
  <div class="s:flex-auto" style="width:30%">flex-auto: width:30%</div>
</div>
```
