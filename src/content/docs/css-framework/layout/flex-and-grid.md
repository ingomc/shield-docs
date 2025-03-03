---
title: Flex & Grid
description: Flex & Grid-blabla
---

<!-- markdownlint-disable MD033 MD024 MD036 -->

# Flex und Grid

### Breakpoints

Alle folgenden Utils haben auch die Breakpointsmodifier

Basic: [Breakpoints](docs/basics?id=breakpoints)

Beispiele: `s:md:gap-0`,`s:lg:justify-start`, `s:sm:place-self-center` ...

**Nice to know**

- `justify-content` steuert die Ausrichtung der Grid/Flexbox-_Spalten_. Es wird auf dem Grid/Flex Wrapper Container angewendet. Diese Eigenschaft steuert nicht die Ausrichtung der Grid/Flexbox Items.
- `justify-self` and `justify-items` stehen nicht in Flexbox zur Verfügung.
- `justify-items` steuert die Ausrichtung des Grid-Items. Es wird auf den Container angewendet, nicht auf das Item.
- `justify-self` überschreibt `justify-items` für dieses individuelle Item.

## Gap

Geht sowohl bei `s:d-flex`- als auch bei `s:d-grid`
In unserem Framework definieren wir immer eine `gap` (16px / var(--spacing-4)) bzw. den Abstand<br />
Sollte kein Abstand zwischen den Elementen gewünscht sein, kann dieser wieder entfernt werden mit `s:gap-0`.

| Allgemein | Horizontal | Vertikal   | Spacing           |
| --------- | ---------- | ---------- | ----------------- |
| s:gap-0   | s:gap-x-0  | s:gap-y-0  | var(--spacing-0)  |
| s:gap-1   | s:gap-x-1  | s:gap-y-1  | var(--spacing-1)  |
| s:gap-2   | s:gap-x-2  | s:gap-y-2  | var(--spacing-2)  |
| s:gap-3   | s:gap-x-3  | s:gap-y-3  | var(--spacing-3)  |
| s:gap-4   | s:gap-x-4  | s:gap-y-4  | var(--spacing-4)  |
| s:gap-5   | s:gap-x-5  | s:gap-y-5  | var(--spacing-5)  |
| s:gap-6   | s:gap-x-6  | s:gap-y-6  | var(--spacing-6)  |
| s:gap-7   | s:gap-x-7  | s:gap-y-7  | var(--spacing-7)  |
| s:gap-8   | s:gap-x-8  | s:gap-y-8  | var(--spacing-8)  |
| s:gap-9   | s:gap-x-9  | s:gap-y-9  | var(--spacing-9)  |
| s:gap-10  | s:gap-x-10 | s:gap-y-10 | var(--spacing-10) |
| s:gap-11  | s:gap-x-11 | s:gap-y-11 | var(--spacing-11) |
| s:gap-12  | s:gap-x-12 | s:gap-y-12 | var(--spacing-12) |

### mit Klassen

<div class="s:d-grid s:gap-3 s:text-center demo demo__spacing-bg">
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝🐝🐝🐝
  </div>
</div>

```html
<div class="s:d-grid s:gap-3 ...">...</div>
```

<div class="s:d-grid s:gap-12 s:text-center demo demo__spacing-bg">
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3;">
    🐝🐝🐝🐝🐝🐝🐝🐝
  </div>
</div>

```html
<div class="s:d-grid s:gap-12 ...">...</div>
```

### mit CSS-Vars und Breakpointabhängig

Will man ein individuelles `gap`, gibt es die CSS-Variablen im style-Tag: `--grid-base:32px` oder spezifischer: row & column `--grid-gap-x:32px;--grid-gap-y:32px;`.

Sollen die Abstände je nach Breakpoint spezifisch eingestellt werden kann dies so erreicht werden: `--grid-gap-y-lg:64px;` oder `--grid-gap-x-md: 64px;`.

<div class="s:d-flex s:flex-wrap s:text-center demo demo__spacing-bg"
  style="--grid-gap-x:32px;--grid-gap-y:16px; --grid-gap-y-lg:64px;--grid-gap-x-md: 64px;">
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝🐝🐝🐝🐝🐝
  </div>
  <div class="s:p-1 s:bg-primary s:border-radius-sm">
    🐝🐝🐝🐝🐝🐝🐝🐝🐝
  </div>
</div>

```html
<div
  class="s:d-flex ..."
  style="
    --grid-gap-x:32px;
    --grid-gap-y:16px;
    --grid-gap-y-lg:64px;
    --grid-gap-x-md: 64px;"
>
  ...
</div>
```

## Reihenfolge (Order)

Geht sowohl bei `flex`- als auch bei `grid`-Items

<div class="s:d-grid s:ordered s:text-center demo demo__spacing-bg">
  <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3; --order: 3; --order-md: 0">
    🐝 <br />
    order:3 <br />
    order-md:0
  </div>
  <div class="s:p-1 s:bg-accent s:border-radius-sm s:text-on-accent" style="--col: 3; --order: 1; --order-md: auto">
    🐝 🐝<br />
    order:1<br />
    order-md:auto
  </div>
  <div class="s:p-1 s:bg-critical s:border-radius-sm s:text-on-accent" style="--col: 3; --order: 0; --order-md: 3">
    🐝 🐝 🐝 <br />
    order:0 <br />
    order-md:3
  </div>
  <div class="s:p-1 s:bg-positive s:border-radius-sm s:text-on-accent" style="--col: 3; --order-md: 2">
    🐝 🐝 🐝 🐝 <br />
    order:auto <br />
    order-md:2
  </div>
</div>

```html
<div class="s:d-grid s:ordered">
  <div style="--col: 3; --order: 3; --order-md: 0">
    🐝 <br />
    order:3 <br />
    order-md:0
  </div>
  <div style="--col: 3; --order: 1; --order-md: auto">
    🐝 🐝<br />
    order:1<br />
    order-md:auto
  </div>
  <div style="--col: 3; --order: 0; --order-md: 3">
    🐝 🐝 🐝 <br />
    order:0 <br />
    order-md:3
  </div>
  <div style="--col: 3; --order-md: 2">
    🐝 🐝 🐝 🐝 <br />
    order:auto <br />
    order-md:2
  </div>
</div>
```

## Justify Content

Grid und Flexbox

| Klasse            | CSS-Eigenschaft                 |
| ----------------- | ------------------------------- |
| s:justify-start   | justify-content: flex-start;    |
| s:justify-end     | justify-content: flex-end;      |
| s:justify-center  | justify-content: flex-center;   |
| s:justify-between | justify-content: space-between; |
| s:justify-around  | justify-content: space-around;  |
| s:justify-evenly  | justify-content: space-evenly;  |

### Start

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:justify-start demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm s:mx-1">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:justify-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm s:mx-1">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:justify-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:justify-end demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:mx-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Justify Between

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:justify-between demo__spacing-bg">
    <div class="s:p-1 s:bg-primary text-on-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:mx-1 s:bg-primary text-on-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary text-on-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:justify-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Justify Evenly

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:justify-evenly demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:mx-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:justify-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Justify Around

<div class="demo demo--resizable">
  <div class="s:p-1 s:d-flex s:justify-around demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:mx-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-flex s:justify-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Justify Items

`Nur Grid`

| Klasse                  | CSS-Eigenschaft         |
| ----------------------- | ----------------------- |
| s:justify-items-start   | justify-items: start;   |
| s:justify-items-end     | justify-items: end;     |
| s:justify-items-center  | justify-items: center;  |
| s:justify-items-stretch | justify-items: stretch; |

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid s:justify-items-start demo__spacing-bg" style="--g-cols:3">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>  
</div>

```html
<div class="s:d-grid s:justify-items-start ..." style="--g-cols:3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid s:justify-items-end demo__spacing-bg" style="--g-cols:3">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>  
</div>

```html
<div class="s:d-grid s:justify-items-end ..." style="--g-cols:3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid s:justify-items-center demo__spacing-bg" style="--g-cols:3">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>  
</div>

```html
<div class="s:d-grid s:justify-items-center ..." style="--g-cols:3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch

<div class="demo demo--resizable">
    <div class="s:d-grid s:justify-items-stretch s:text-center demo__spacing-bg" style="--g-cols:3">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>  
</div>

```html
<div class="s:d-grid s:justify-items-stretch ..." style="--g-cols:3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

## Justify Self

Nur Grid

| Klasse                 | CSS-Eigenschaft        |
| ---------------------- | ---------------------- |
| s:justify-self-auto    | justify-self: auto;    |
| s:justify-self-start   | justify-self: start;   |
| s:justify-self-end     | justify-self: end;     |
| s:justify-self-center  | justify-self: center;  |
| s:justify-self-stretch | justify-self: stretch; |

`s:justify-self-auto` Ausrichtung wird von `s:justify-items` übernommen:

<div class="demo demo--resizable">
    <div class="s:d-grid s:justify-items-stretch s:text-center demo__spacing-bg" style="--g-cols:3">
        <div class="s:p-1 s:justify-self-start s:bg-primary s:border-radius-sm">start</div>
        <div class="s:p-1 s:justify-self-end s:bg-primary s:border-radius-sm">end</div>
        <div class="s:p-1 s:justify-self-center s:bg-primary s:border-radius-sm">center</div>
        <div class="s:p-1 s:justify-self-stretch s:bg-primary s:border-radius-sm">stretch</div>
        <div class="s:p-1 s:justify-self-auto s:bg-primary s:border-radius-sm">auto</div>
    </div>  
</div>

```html
<div class="s:d-grid s:justify-items-stretch" style="--g-cols:3">
  <div class="s:justify-self-start">start</div>
  <div class="s:justify-self-end">end</div>
  <div class="s:justify-self-center">center</div>
  <div class="s:justify-self-stretch">stretch</div>
  <div class="s:justify-self-auto">auto</div>
</div>
```

## Align Content

| Klasse            | CSS-Eigenschaft               |
| ----------------- | ----------------------------- |
| s:content-center  | align-content: center;        |
| s:content-start   | align-content: flex-start;    |
| s:content-end     | align-content: flex-end;      |
| s:content-between | align-content: space-between; |
| s:content-around  | align-content: space-around;  |
| s:content-evenly  | align-content: space-evenly;  |

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid s:content-start s:text-center demo__spacing-bg" style="--g-cols:3; height:200px;">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
    </div>  
</div>

```html
<div class="s:d-grid s:content-start" style="--g-cols:3; height:200px;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid s:content-center s:text-center demo__spacing-bg" style="--g-cols:3; height:200px;">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
    </div>  
</div>

```html
<div class="s:d-grid s:content-center" style="--g-cols:3; height:200px;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid s:content-end s:text-center demo__spacing-bg" style="--g-cols:3; height:200px;">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
    </div>  
</div>

```html
<div class="s:d-grid s:content-end" style="--g-cols:3; height:200px;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space-Between

<div class="demo demo--resizable">
    <div class="s:d-grid s:content-between s:text-center demo__spacing-bg" style="--g-cols:3; height:200px;">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
    </div>  
</div>

```html
<div class="s:d-grid s:content-between" style="--g-cols:3; height:200px;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space-Around

<div class="demo demo--resizable">
    <div class="s:d-grid s:content-around s:text-center demo__spacing-bg" style="--g-cols:3; height:200px;">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
    </div>  
</div>

```html
<div class="s:d-grid s:content-around" style="--g-cols:3; height:200px;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space-Evenly

<div class="demo demo--resizable">
    <div class="s:d-grid s:content-evenly s:text-center demo__spacing-bg" style="--g-cols:3; height:200px;">
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
    </div>  
</div>

```html
<div class="s:d-grid s:content-evenly" style="--g-cols:3; height:200px;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

## Align Items

| Klasse           | CSS-Eigenschaft          |
| ---------------- | ------------------------ |
| s:items-start    | align-items: flex-start; |
| s:items-end      | align-items: flex-end;   |
| s:items-center   | align-items: center;     |
| s:items-baseline | align-items: baseline;   |
| s:items-stretch  | align-items: stretch;    |

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-start demo__spacing-bg" style="--g-cols:3;">
        <div class="s:py-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:py-3 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:py-2 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-start" style="--g-cols:3;">
  <div class="s:py-1">01</div>
  <div class="s:py-3">02</div>
  <div class="s:py-2">03</div>
</div>
```

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-center demo__spacing-bg" style="--g-cols:3;">
        <div class="s:py-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:py-3 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:py-2 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-center" style="--g-cols:3;">
  <div class="s:py-1">01</div>
  <div class="s:py-3">02</div>
  <div class="s:py-2">03</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-end demo__spacing-bg" style="--g-cols:3;">
        <div class="s:py-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:py-3 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:py-2 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-end" style="--g-cols:3;">
  <div class="s:py-1">01</div>
  <div class="s:py-3">02</div>
  <div class="s:py-2">03</div>
</div>
```

### Baseline

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-baseline demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-2 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:pb-3 s:pt-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:pt-3 s:pb-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-baseline" style="--g-cols:3;">
  <div class="s:py-1">01</div>
  <div class="s:py-3">02</div>
  <div class="s:py-2">03</div>
</div>
```

### Stretch

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-stretch demo__spacing-bg" style="--g-cols:3;">
        <div class="s:py-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:py-3 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:py-2 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-stretch" style="--g-cols:3;">
  <div class="s:py-1">01</div>
  <div class="s:py-3">02</div>
  <div class="s:py-2">03</div>
</div>
```

## Align Self

| Klasse          | CSS-Eigenschaft         |
| --------------- | ----------------------- |
| s:self-auto     | align-self: auto;       |
| s:self-start    | align-self: flex-start; |
| s:self-end      | align-self: flex-end;   |
| s:self-center   | align-self: center;     |
| s:self-stretch  | align-self: stretch;    |
| s:self-baseline | align-self: baseline;   |

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-stretch demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm" style="height:6rem">01</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:self-start s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-stretch" style="--g-cols:3;">
  <div style="height:6rem">01</div>
  <div class="s:self-start">02</div>
  <div>03</div>
</div>
```

### Auto

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-stretch demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm" style="height:6rem">01</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:self-auto s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-stretch" style="--g-cols:3;">
  <div style="height:6rem">01</div>
  <div class="s:self-auto">02</div>
  <div>03</div>
</div>
```

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-stretch demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary" style="height:6rem">01</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:self-center s:bg-primary">02</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-stretch" style="--g-cols:3;">
  <div style="height:6rem">01</div>
  <div class="s:self-center">02</div>
  <div>03</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-stretch demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm" style="height:6rem">01</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:self-end s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-stretch" style="--g-cols:3;">
  <div style="height:6rem">01</div>
  <div class="s:self-end">02</div>
  <div>03</div>
</div>
```

### Stretch

<div class="demo demo--resizable">
    <div class="s:d-grid s:items-stretch demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm" style="height:6rem">01</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:self-stretch s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:d-flex s:items-center s:justify-center s:bg-primary s:border-radius-sm">03</div>
    </div>  
</div>

```html
<div class="s:d-grid s:items-stretch" style="--g-cols:3;">
  <div style="height:6rem">01</div>
  <div class="s:self-stretch">02</div>
  <div>03</div>
</div>
```

## Place Content

| Klasse                  | CSS-Eigenschaft               |
| ----------------------- | ----------------------------- |
| s:place-content-center  | place-content: center;        |
| s:place-content-start   | place-content: start;         |
| s:place-content-end     | place-content: end;           |
| s:place-content-between | place-content: space-between; |
| s:place-content-around  | place-content: space-around;  |
| s:place-content-evenly  | place-content: space-evenly;  |
| s:place-content-stretch | place-content: stretch;       |

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-center demo__spacing-bg" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-content-center" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-start demo__spacing-bg" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-content-start" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-end demo__spacing-bg" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-content-end" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space-Between

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-between demo__spacing-bg" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div
  class="s:d-grid s:place-content-between"
  style="--g-cols:2; --g-cols-width:4rem; height:12rem;"
>
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space-Around

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-around demo__spacing-bg" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-content-around" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space-Evenly

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-evenly demo__spacing-bg" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-content-evenly" style="--g-cols:2; --g-cols-width:4rem; height:12rem;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Stretch

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-content-stretch demo__spacing-bg" style="--g-cols:2; height:12rem;">
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:d-flex s:items-center s:justify-center s:p-1 s:bg-primary s:border-radius-sm">04</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-content-stretch" style="--g-cols:2; height:12rem;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

## Place Items

| Klasse                | CSS-Eigenschaft       |
| --------------------- | --------------------- |
| s:place-items-start   | place-items: start;   |
| s:place-items-end     | place-items: end;     |
| s:place-items-center  | place-items: center;  |
| s:place-items-stretch | place-items: stretch; |

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-items-start demo__spacing-bg" style="--g-cols:3;" >
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-items-start" style="--g-cols:3;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-items-center demo__spacing-bg" style="--g-cols:3;" >
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-items-center" style="--g-cols:3;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-items-end demo__spacing-bg" style="--g-cols:3;" >
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-items-end" style="--g-cols:3;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch

<div class="demo demo--resizable">
    <div class="s:d-grid s:place-items-stretch demo__spacing-bg" style="--g-cols:3;" >
        <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">04</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">05</div>
        <div class="s:p-1 s:bg-primary s:border-radius-sm">06</div>
    </div>
</div>

```html
<div class="s:d-grid s:place-items-stretch" style="--g-cols:3;">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

## Place Self

| Klasse               | CSS-Eigenschaft      |
| -------------------- | -------------------- |
| s:place-self-auto    | place-self: auto;    |
| s:place-self-start   | place-self: start;   |
| s:place-self-end     | place-self: end;     |
| s:place-self-center  | place-self: center;  |
| s:place-self-stretch | place-self: stretch; |

### Auto

Krieg die Eigenschaft vom Wrapper Container vererbt.

<div class="demo demo--resizable">
    <div class="s:d-grid demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-4 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:place-self-auto s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-4 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">03</div>
    </div>
</div>

```html
<div class="s:d-grid" style="--g-cols:3;">
  <div>01</div>
  <div class="s:place-self-auto">02</div>
  <div>03</div>
</div>
```

### Start

<div class="demo demo--resizable">
    <div class="s:d-grid demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:place-self-start s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">03</div>
    </div>
</div>

```html
<div class="s:d-grid" style="--g-cols:3;">
  <div>01</div>
  <div class="s:place-self-start">02</div>
  <div>03</div>
</div>
```

### Center

<div class="demo demo--resizable">
    <div class="s:d-grid demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:place-self-center s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">03</div>
    </div>
</div>

```html
<div class="s:d-grid" style="--g-cols:3;">
  <div>01</div>
  <div class="s:place-self-center">02</div>
  <div>03</div>
</div>
```

### End

<div class="demo demo--resizable">
    <div class="s:d-grid demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:place-self-end s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">03</div>
    </div>
</div>

```html
<div class="s:d-grid" style="--g-cols:3;">
  <div>01</div>
  <div class="s:place-self-end">02</div>
  <div>03</div>
</div>
```

### Stretch

<div class="demo demo--resizable">
    <div class="s:d-grid demo__spacing-bg" style="--g-cols:3;">
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">01</div>
        <div class="s:p-1 s:place-self-stretch s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">02</div>
        <div class="s:p-6 s:d-flex s:justify-center s:items-center s:bg-primary s:border-radius-sm">03</div>
    </div>
</div>

```html
<div class="s:d-grid" style="--g-cols:3;">
  <div>01</div>
  <div class="s:place-self-stretch">02</div>
  <div>03</div>
</div>
```
