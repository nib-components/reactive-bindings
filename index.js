var events = require('event');
var value = require('value');


/**
 * Bind an attribute to an input, select or textarea field
 * When the field updates, it updates the model. When the
 * model updates, the field state updates
 * <input data-model="email" name="email">
 */


function dataModel(el, property){   //el, attr
  var binding = this;
  var reactive = binding.reactive;
  var type = el.getAttribute('type');
  var name = el.nodeName.toLowerCase();

  // When the field changes
  events.bind(el, 'change', function(){
    reactive.set(property, value(el));
  });

  // When the attribute changes
  binding.change(function() {
    var val = reactive.get(property);

    if(val == null) {
      val = "";
    }
    if(name !== "input" && name !== "select") {
      el.innerHTML = val;
    }
    else if(type === "radio") {
      value(el, el.value === String(val));
    }
    else {
      value(el, val);
    }
  });

  // Populate the reactive model immediately, if there is no value already
  if(reactive.get(property) == null) {
    reactive.set(property, value(el));
  }
}


/**
 * Set the text/value for a set of options in a select menu.
 * The property value should be an array of strings that will
 * be used to create and populate the options in a select
 * <select data-option-text="{name}"></select>
 */


function optionText(el, property){
  var binding = this;
  binding.change(function() {
    var options = binding.value(property);
    for(var i=0, n = options.length; i < n; i++){
      var option = document.createElement('option');
      option.value = option.text = options[i];
      el.appendChild(option);
    }
  });
}

/**
 * Expose `bindings`.
 */

module.exports = {
  bindings: {
    'data-option-text': optionText,
    'data-model': dataModel
  }
};