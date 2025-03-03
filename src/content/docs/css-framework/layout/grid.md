---
title: Grid
description: Grid-blabla
---

<!-- markdownlint-disable MD033 MD024 MD041 -->

# Grid

## Basics

<div class="demo demo--resizable">
  <div class="s:d-grid s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col:3">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col:6">col-6</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col:3">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 12">col-12</div>
  </div>
</div>

```html
<div class="s:d-grid">
  <div style="--col:3">col-3</div>
  <div style="--col:6">col-6</div>
  <div style="--col:3">col-3</div>
  <div style="--col: 12">all</div>
</div>
```

## Grid Abstände (Gap)

Initial ist `gap` (16px/ var(--spacing-4)) definiert. Dieser kann mit `s:gap-0` entfernt werden. Siehe außerdem [Flex & Grid Gaps](docs/flex-and-grid?id=gap)

<div class="demo demo--resizable">
  <div class="s:d-grid s:gap-0 s:p-1 s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
  <br>
  <hr>
  <br>
  <div class="s:d-grid s:gap-3 s:sm:gap-6 s:lg:gap-10 s:p-1 s:text-center demo__spacing-bg" style="">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">01</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">02</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">03</div>
  </div>
</div>

```html
<div class="s:d-grid s:gap-0 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Gap via CSS-Variable und mit Breakpoint

Über die CSS-Variablen `--grid-gap-x` bzw. `--grid-gap-y` können die Abstände der Zeilen und Spalten des Grids verändert werden. Für verschiedene Abstände je nach Breakpoint erhalten obige CSS-Variables den jew. Breakpoint als Suffix: z. B. `--grid-gap-x-sm` oder `--grid-gap-y-xl`.

Bei nested Grids vererben sich diese CSS-Variablen – d.h. dass diese CSS-Variables dann ggf. im inneren Grid wieder resetted werden müssen. Das Beispiel zeigt, dass der große vertikale Abstand im inneren Grid wieder auf den initial-Wert gesetzt wurde `--grid-gap-y-md: initial;`.

(Die Summe der Gaps muss natürlich kleiner sein, als die Gesamtgröße des Containers)

<div class="demo demo--resizable">
  <div class="s:d-grid s:text-center demo__spacing-bg" style="
    --grid-gap-x: var(--spacing-0);
    --grid-gap-x-sm: 12px;
    --grid-gap-x-md: 30px;
    --grid-gap-y-md: 50px;
    ">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col:3">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col:6">col-6</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col:3">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style=" --col: 12">
      <div class="s:d-grid s:text-center demo__spacing-bg s:bg-positive" style="--g-cols: 3;
      --grid-gap-x: 5px;
      --grid-gap-x-md: 10px;
      --grid-gap-x-sm: 20px;
      --grid-gap-y-md: initial;
      ">
        <div class="s:p-1 s:bg-accent s:border-radius-sm" style="--col:1">col-1</div>
        <div class="s:p-1 s:bg-accent s:border-radius-sm" style="--col:1">col-1</div>
        <div class="s:p-1 s:bg-accent s:border-radius-sm" style="--col:1">col-1</div>
        <div class="s:p-1 s:bg-accent s:border-radius-sm" style="--col:1">col-1</div>
        <div class="s:p-1 s:bg-accent s:border-radius-sm" style="--col:1">col-1</div>
        <div class="s:p-1 s:bg-accent s:border-radius-sm" style="--col:1">col-1</div>
      </div>
    </div>
  </div>
</div>

```html
<div
  class="s:d-grid s:text-center demo__spacing-bg"
  style="
  --grid-gap-x: var(--spacing-0);
  --grid-gap-x-sm: 12px;
  --grid-gap-x-md: 30px;
  --grid-gap-y-md: 50px;
  "
>
  ...
</div>
```

## Mediaquery

Wie in anderen Frameworks wie Bootstrap oder Tailwind üblich arbeiten wir Mobile-First (siehe [Basics](docs/basics?id=mobile-first)). D.h. wir definieren Spalten vom kleinsten Breakpoint aus und vererben das nach obenhin weiter.
`--col: __` definiert vom kleinsten Breakpoint aus nach oben. `--col-md: __` definiert die Anzahl der Spalten ab dem Breakoint `md` und größer.

Beispiel für [Breakpoints](docs/basics?id=breakpoints): Das Grid wird via `--g-cols:3` auf 3 Spalten definiert (default ist 12 Spalten). `XS` aufwärts 3 von 3 Spalten, also eine komplette Zeile. An Breakpoint `MD`
dann entsprechend wie in der Demo angegeben 1 oder 2 Spalten.

Breakpoints: `--col` `--col-sm` `--col-md` `--col-lg` `--col-xl`

<div class="demo demo--resizable">
  <div class="s:d-grid s:text-center demo__spacing-bg" style="--g-cols: 3">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3; --col-md: 2">col-2, col-md: 2</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3; --col-md: 1">col-1, col-md: 1</div>
  </div>
</div>

```html
<div class="s:d-grid" style="--g-cols: 3">
  <div style="--col: 3">col-3</div>
  <div style="--col: 3; --col-md: 2">col-2</div>
  <div style="--col: 3; --col-md: 1">col-1</div>
</div>
```

## Autogrid (experimentell)

Voll flexibles Autogrid. Jedes spalte ist minimal XXX: px und maximal XXX: px

### Demo 1

<div class="demo demo--resizable">
  <div class="s:auto-grid s:text-center">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-1</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-2</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-3</div>
  </div>
</div>

```html
<div class="s:auto-grid">
  <div>col-1</div>
  <div>col-2</div>
  <div>col-3</div>
</div>
```

### Demo 2

<div class="demo demo--resizable">
  <div class="s:auto-grid s:text-center">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-1</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-2</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-4</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-5</div>
  </div>
</div>

```html
<div class="s:auto-grid">
  <div>col-1</div>
  <div>col-2</div>
  <div>col-3</div>
  <div>col-4</div>
  <div>col-5</div>
</div>
```

### Demo mit einstellbaren Breiten (experimentell)

Man kann das Grid hier zu Not anpassen

<div class="demo demo--resizable">
  <div class="s:auto-grid s:text-center" id="autogridwidthwrapper" style="--width:300px">
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-1</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-2</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-4</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm">col-5</div>
  </div>
</div>

Eigene Werte test: (z.B. `100px`, `10%`, `300px`)

<input value="300px" class="s:p-2 s:border-xs s:border-neutral-lighter s:border-radius-sm" width="300" type="text" name="autogridwidth" id="autogridwidth">

## Row spans

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur

<div class="demo demo--resizable">
  <div class="s:d-grid s:text-center demo__spacing-bg" style="--g-rows: 3; --g-cols: 3">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--row-span: 2; --row-span-md: 3; --col: 1">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 1; --col-md: 1">col-6</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 1; --col-md: 1; --row-span-md: 2">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 2; --col-md: 1">col-3</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3; --col-md: 3">col-3</div>
  </div>
</div>

```html
<div class="s:d-grid" style="--g-rows: 3; --g-cols: 3">
  <div style="--row-span: 2; --row-span-md: 3; --col: 1">col-3</div>
  <div style="--col: 1; --col-md: 1">col-6</div>
  <div style="--col: 1; --col-md: 1; --row-span-md: 2">col-3</div>
  <div style="--col: 2; --col-md: 1">col-3</div>
  <div style="--col: 3; --col-md: 3">col-3</div>
</div>
```

## Grid via JS

<div class="demo demo--resizable demo--hidden-4-snapshot-testing">
  <div class="s:d-grid s:mb-1 s:text-center demo__spacing-bg s:mb-6">
    <div class="js s:p-1 s:bg-primary s:border-radius-sm s:text-nowrap" style="--col: 1">col via JS</div>
  </div>
  <div class="s:d-grid s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 4">
      <input class="range" type="range" min="1" max="12" value="5" step="1" />
      <p>Slide that slider!</p>
    </div>
    <div style="--col: 8">
      <div class="s:d-grid">
        <div class="slider s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3">col via JS</div>
        <div class="slider s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3">col via JS</div>
        <div class="slider s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3">col via JS</div>
      </div>
    </div>
  </div>
</div>

## Alignment through push

<div class="demo demo--resizable">
  <div class="s:d-grid s:text-center demo__spacing-bg">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 5; --col-start: 3; --col-start-md: 6">pushed</div>
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 3; --col-start: 3; --col-start-md: 8">pushed</div>
  </div>
  <h2 class="s:text-h5 s:mt-6">Ola offset2 lg-8</h2>
  <div class="s:d-grid demo__spacing-bg" style="--g-cols: 6">
    <div class="s:p-1 s:bg-primary s:border-radius-sm" style="--col: 6; --col-md: 4; --col-start-md: 2">pushed</div>
  </div>
</div>

## Order

<div class="s:p-4 s:bg-primary-subdued">
  Siehe <a data-docsify href="#/docs/flex-and-grid.md">Flex & Grid &rsaquo;</a>
</div>

## Nested grids

<div class="demo">
  <div class="s:d-grid s:bg-accent s:text-center" style="--g-cols: 6">
    <div class="s:p-3 s:box-shadow-inner" style="--col: 6;">Grid 6 Cols</div>
    <div class="s:bg-positive s:border-radius-sm" style="--col: 4;">
      <p class="s:p-3">col-4</p>
      <div class="s:d-grid s:bg-primary s:border-radius-sm">
        <div class="s:p-3 s:bg-accent" style="--col: 6;">Nested grid 6cols (geerbt von Wrapper)</div>
        <div style="--col: 1;"><p class="s:p-3">col-1</p></div>
        <div style="--col: 4;">
          <p class="s:p-3">col-4</p>
          <div class="s:d-grid" style="--g-cols: 12">
            <div class="s:p-2 s:bg-accent s:border-radius-sm" style="--col: 12;">Nested grid 12cols</div>
            <div class="s:p-2 s:bg-accent s:border-radius-sm" style="--col: 3;">3</div>
            <div class="s:p-2 s:bg-accent s:border-radius-sm" style="--col: 4;">4</div>
            <div class="s:p-2 s:bg-accent s:border-radius-sm" style="--col: 5;">5</div>
          </div>
        </div>
        <div style="--col: 1;"><p class="s:p-3">col-1</p></div>
      </div>
    </div>
    <div class="s:bg-positive s:border-radius-sm" style="--col: 2;"><p class="s:p-3">col-2</p></div>
  </div>
</div>

```html
<div class="s:d-grid" style="--g-cols: 6">
  <div style="--col: 4;">
    <p>col-4</p>
    <div class="s:d-grid">
      <div style="--col: 6;">Nested grid 6cols geerbt von Wrapper</div>
      <div style="--col: 1;"><p>col-1</p></div>
      <div style="--col: 4;">
        <p>col-4</p>
        <div class="s:d-grid" style="--g-cols: 12">
          <div class="s:p-2" style="--col: 12;">Nested grid 12cols</div>
          <div class="s:p-2" style="--col: 3;">3</div>
          <div class="s:p-2" style="--col: 4;">4</div>
          <div class="s:p-2" style="--col: 5;">5</div>
        </div>
      </div>
      <div style="--col: 1;"><p>col-1</p></div>
    </div>
  </div>
  <div style="--col: 2;"><p>col-2</p></div>
</div>
```

## Verschachtelte Grids mit automatischen Breakpoint-Reset

Diese Demo soll zeigen, dass Breakpoints Col-Breiten nicht automatisch an das innere Grid weitervererbt werden. Jede `s:d-grid` resettet seine CSS-Vars auf den default, so dass nicht automatisch z.B. `--col-md: 10` an das innere Grid vererbt wird, falls dieses keinen eigenen Wert dafür setzt. Diese Demo ist eher ein Edge-Case Testfall.

<div class="demo">
  <div class="s:d-grid s:bg-accent s:text-center">
    <div class="s:bg-primary s:text-center" style="--col:10; --col-md:10">
      <div class="s:d-grid s:p-2">
        <div class="s:bg-positive" style="--col:4">--col-4 wird nicht von --col-md:10 überschrieben</div>
      </div>
    </div>
    <div class="s:bg-primary s:text-center" style="--col:2">Spalte rechts</div>
  </div>
</div>

<script>
  // Text Input for Autogridwidth
  const autogridwidth = document.querySelector("#autogridwidth");
  const autogridwidthwrapper = document.querySelector("#autogridwidthwrapper");

  function handleAutoWidth(e) {
    let value = e.target.value;
    console.log(value);
    autogridwidthwrapper.style.setProperty("--width", value);
  }
  autogridwidth.addEventListener("input", handleAutoWidth);
  
  // Col Slider Input
  const columns = 12;
  let col = 0;
  const jsbox = document.querySelector(".js");
  const sliderbox = document.querySelectorAll(".slider");
  const range = document.querySelector(".range");
  function count() {
    col++;
    if (col > columns) {
      col = 1;
    }
    // console.log(`col: ${col}`);
    jsbox.style.setProperty("--col", col);
    jsbox.innerText = `col via JS: ${col}`;
  }
  setInterval(count, 1000);
  function handleSlider(e) {
    let value = e.target.value;
    sliderbox.forEach((slider) => {
      slider.style.setProperty("--col", value);
      slider.innerText = `col via JS: ${value}`;
    });
  }
  range.addEventListener("input", handleSlider);
</script>
