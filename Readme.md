# reactive-bindings

  Custom reactive bindings
  
  **Note**: Version 1.0.0 of reactive-bindings is to be used with **component/reactive 1.0.x**

## Installation

  Install with [component(1)](http://component.io):

    $ component install nib-components/reactive-bindings

## API

###data-model

Bind an attribute to an input, select or textarea field.
When the field updates, it updates the model. 
When the model updates, the field state updates.

```js
// script.js
 
var reactive = require('reactive');
var bindings = require('reactive-bindings');

var tmp = document.querySelector('.js-skater');
var model = {
  "name": "Tony Hawk";
  "trick" "900",
  "isGnarly": "yes"
}

reactive(model, tmp, bindings);
```

```html
<!-- template.html -->

<form class="js-skater">
  <input type="text" name="name" data-model="name">
  <input type="text" name="trick" data-model="trick">
  <label>
    <input type="radio" value="yes" name="isGnarly" data-model="isGnarly">Yes
  </label>
  <label>
    <input type="radio" value="no" name="isGnarly" data-model="isGnarly">No
  </label>
</form>
```

###data-option-text

Create and set the text/value for a set of options in a select menu.
The property value should be an array of strings that will be used to create and populate the options in a select field.


```js
// script.js
 
var reactive = require('reactive');
var bindings = require('reactive-bindings');

var tmp = document.querySelector('.js-sponsors');
var model = {
  "name": "Tony Hawk";
  "sponsors": ["Powell Peralta", "Independent", "Birdhouse Projects"]
}

reactive(model, tmp, bindings);
```

```html
<!-- template.html -->

<div class="js-sponsors">
  {name} sponsors included <select data-option-text="sponsors"></select>
</div>
```

## License

  MIT

<script src="http://yandex.st/highlightjs/7.3/highlight.min.js"></script>
<link rel="stylesheet" href="http://yandex.st/highlightjs/7.3/styles/github.min.css">
<script>
  hljs.initHighlightingOnLoad();
</script>
