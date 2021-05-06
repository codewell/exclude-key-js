"use strict";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var reducer = (object, keys) => (accumulator, objectKey) => {
  if (!keys.includes(objectKey)) {
    return _objectSpread2(
      _objectSpread2({}, accumulator),
      {},
      {
        [objectKey]: object[objectKey],
      },
    );
  }

  return accumulator;
}; // Exclude key from object
// e.g. excludeKey({foo: 'bar'}, 'foo')
// => {}

var excludeKeys = function excludeKeys(object) {
  if (typeof object !== "object") {
    throw new Error("Invalid object ".concat(object));
  }

  for (
    var _len = arguments.length,
      keys = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    keys[_key - 1] = arguments[_key];
  }

  if ([undefined, null].includes(keys)) {
    return object;
  }

  if (keys.filter((key) => typeof key !== "string").length > 0) {
    throw new Error("Invalid key type ".concat(typeof key));
  }

  return Object.getOwnPropertyNames(object).reduce(reducer(object, keys), {});
};

module.exports = excludeKeys;
