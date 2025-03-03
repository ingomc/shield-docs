---
title: Float
description: Float-blabla
---

<!-- markdownlint-disable MD033 -->

# Float <!-- {docsify-ignore} -->

Mit der CSS-Eigenschaft float (zu Deutsch »schweben«) weisen wir ein Element an, sich an den linken `s:float-left` oder 
an den rechten `s:float-right` Rand seines Elternelements zu schieben. Das hat nicht nur Auswirkungen auf das Element 
selbst, sondern vor allem auf andere Elemente, die mit dem "gefloateten" Element in Verbindung stehen. 
Die Klasse `s:clearfix` wird (auf dem Elternelement) verwendet, um die floats wieder zu "clearen".

<div class="demo">
  <div class="s:clearfix">
    <img class="s:float-right s:w-32 s:ml-4" width="432" height="450" src="./images/huk_css_framework_example_image_cropped.png" />
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est.
    </p>
  </div>
</div>

```html
<p class="s:clearfix">
  <img class="s:float-right s:w-32 s:ml-4" src="..." />
  Lorem ipsum dolor sit amet,
</p>
```

<div class="demo">
  <p class="s:clearfix">
    <img class="s:float-left s:w-auto s:mr-4" width="432" height="450" src="./images/huk_css_framework_example_image_cropped.png" />
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
    amet.
  </p>
</div>

```html
<p class="s:clearfix">
  <img class="s:float-left s:mr-4" src="..." />
  Lorem ipsum dolor sit amet,
</p>
```
