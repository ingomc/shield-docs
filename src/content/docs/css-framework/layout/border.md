---
title: Border
description: Border-blabla
---

<!-- markdownlint-disable MD033 -->

# Border <!-- {docsify-ignore} -->

## Width

Directions: `t`= top `b` = bottom `l` = left `r` = right<br>
Sizes: `none` `xs` `sm` `md`

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
        <td>s:border-none</td>
        <td>border-width: 0px;</td>
        <td><div class="demo__border s:border-none"></div></td>
      </tr>
      <tr>
        <td>s:border-xs</td>
        <td>border-width: 1px;</td>
        <td><div class="demo__border s:border-xs"></div></td>
      </tr>
      <tr>
        <td>s:border-sm</td>
        <td>border-width: 2px;</td>
        <td><div class="demo__border s:border-sm"></div></td>
      </tr>
      <tr>
        <td>s:border-md</td>
        <td>border-width: 4px;</td>
        <td><div class="demo__border s:border-md"></div></td>
      </tr>
      <tr>
        <td>s:border-t-md</td>
        <td>border-top-width: 4px;</td>
        <td><div class="demo__border s:border-t-md"></div></td>
      </tr>
      <tr>
        <td>s:border-l-sm</td>
        <td>…</td>
        <td><div class="demo__border s:border-l-sm"></div></td>
      </tr>
      <tr>
        <td>s:border-t-xs s:border-b-md</td>
        <td>…</td>
        <td><div class="demo__border s:border-t-xs s:border-b-md"></div></td>
      </tr>
    </tbody>
  </table>
</div>

## Color

Directions: `t`= top `b` = bottom `l` = left `r` = right<br>
Colors:
`default`
`subdued`
`black`
`white`
`accent`
`positive`
`primary`
`warning`
`critical`
`highlight`
`transparent`

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
        <td>s:border</td>
        <td>border-color: var(--color-border);</td>
        <td><div class="demo__border s:border-sm s:border"></div></td>
      </tr>
      <tr>
        <td>s:border-subdued</td>
        <td>border-color: var(--color-border-subdued);</td>
        <td><div class="demo__border s:border-sm s:border-subdued"></div></td>
      </tr>
      <tr>
        <td>s:border-dark</td>
        <td>border-color: var(--color-border-dark);</td>
        <td><div class="demo__border s:border-sm s:border-black"></div></td>
      </tr>
      <tr>
        <td>s:border-on-dark</td>
        <td>border-color: var(--color-border-on-dark);</td>
        <td><div class="demo__border s:border-sm s:border-white"></div></td>
      </tr>
      <tr>
        <td>s:border-accent</td>
        <td>border-color: var(--color-border-accent);</td>
        <td><div class="demo__border s:border-sm s:border-accent"></div></td>
      </tr>
      <tr>
        <td>s:border-positive</td>
        <td>border-color: var(--color-border-positive);</td>
        <td><div class="demo__border s:border-sm s:border-positive"></div></td>
      </tr>
      <tr>
        <td>s:border-primary</td>
        <td>border-color: var(--color-border-primary);</td>
        <td><div class="demo__border s:border-sm s:border-primary"></div></td>
      </tr>
      <tr>
        <td>s:border-warning</td>
        <td>border-color: var(--color-border-warning);</td>
        <td><div class="demo__border s:border-sm s:border-warning"></div></td>
      </tr>
      <tr>
        <td>s:border-critical</td>
        <td>border-color: var(--color-border-critical);</td>
        <td><div class="demo__border s:border-sm s:border-critical"></div></td>
      </tr>
      <tr>
        <td>s:border-highlight</td>
        <td>border-color: var(--color-border-highlight);</td>
        <td><div class="demo__border s:border-sm s:border-highlight"></div></td>
      </tr>
      <tr>
        <td>s:border-transparent</td>
        <td>border-color: transparent;</td>
        <td><div class="demo__border s:border-sm s:border-transparent"></div></td>
      </tr>
      <tr>
        <td>s:border-t-critical</td>
        <td>border-top-color: var(--color-border-critical);</td>
        <td><div class="demo__border s:border-sm s:border-t-critical"></div></td>
      </tr>
    </tbody>
  </table>
</div>

## Radius

Directions: `t`= top `b` = bottom `l` = left `r` = right<br>
Radius: `none` `xs` `sm` `md` `lg` `xl` `full`

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
        <td>s:border-radius-none</td>
        <td>border-radius: 0px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-none"></div></td>
      </tr>
      <tr>
        <td>s:border-radius-xs</td>
        <td>border-radius: 2px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-xs"></div></td>
      </tr>
      <tr>
        <td>s:border-radius-sm</td>
        <td>border-radius: 4px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-sm"></div></td>
      </tr>
      <tr>
        <td>s:border-radius-md</td>
        <td>border-radius: 6px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-md"></div></td>
      </tr>
      <tr>
        <td>s:border-radius-lg</td>
        <td>border-radius: 8px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-lg"></div></td>
      </tr>
      <tr>
        <td>s:border-radius-xl</td>
        <td>border-radius: 12px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-xl"></div></td>
      </tr>
      <tr>
        <td>s:border-radius-full</td>
        <td>border-radius: 9999px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-full"></div></td>
      </tr>
      <tr>
        <td>s:border-tl-radius-none</td>
        <td>border-top-left-radius: 0px;</td>
        <td><div class="demo__border s:border-sm s:border-radius-full s:border-tl-radius-none"></div></td>
      </tr>
      <tr>
        <td>s:border-tl-radius-full</td>
        <td>border-top-left-radius: ...;</td>
        <td><div class="demo__border s:border-sm s:border-tl-radius-full"></div></td>
      </tr>
      <tr>
        <td>s:border-tr-radius-sm</td>
        <td>border-top-right-radius: ...;</td>
        <td><div class="demo__border s:border-sm s:border-tr-radius-sm"></div></td>
      </tr>
      <tr>
        <td>s:border-bl-radius-lg</td>
        <td>border-bottom-left-radius: ...;</td>
        <td><div class="demo__border s:border-sm s:border-bl-radius-lg"></div></td>
      </tr>
      <tr>
        <td>s:border-br-radius-md</td>
        <td>border-bottom-right-radius: ...;</td>
        <td><div class="demo__border s:border-sm s:border-br-radius-md"></div></td>
      </tr>
    </tbody>
  </table>
</div>

## Styles

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
        <td>s:border-solid (default)</td>
        <td>border-style: solid;</td>
        <td><div class="demo__border s:border-xs s:border-solid"></div></td>
      </tr>
      <tr>
        <td>s:border-dotted</td>
        <td>border-style: dotted;</td>
        <td><div class="demo__border s:border-xs s:border-dotted"></div></td>
      </tr>
      <tr>
        <td>s:border-dashed</td>
        <td>border-style: dashed;</td>
        <td><div class="demo__border s:border-xs s:border-dashed"></div></td>
      </tr>
    </tbody>
  </table>
</div>
