'use strict';

// var utils = require('lazy-cache')(require);
// var fn = require;
// require = utils;

/**
 * Module dependencies
 */

// require('define-property', 'define');
// require('get-value', 'get');
// require('is-valid-app', 'isValid');
// require('isobject', 'isObject');
// require('mixin-deep', 'merge');
// require('option-cache', 'Options');
// require('set-value', 'set');
// require = fn;

var utils = {
  define: require('define-property'),
  get: require('get-value'),
  isValid: require('is-valid-app'),
  isObject: require('isobject'),
  merge: require('mixin-deep'),
  Options: require('option-cache'),
  set: require('set-value')
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
