'use strict';

module.exports = {
  "extends": [
    "stylelint-config-sass-guidelines",
    "stylelint-config-idiomatic-order"
  ],
  "rules": {
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        "declarations",
        "rules"
      ]
    ],
    "order/properties-alphabetical-order": null,
    "max-nesting-depth": null,
    "selector-max-compound-selectors": null,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": ["attribute"]
      }
    ]
  }
};
