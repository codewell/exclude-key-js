const reducer = (object, keys) => (accumulator, objectKey) => {
  if (!keys.includes(objectKey)) {
    return {
      ...accumulator,
      [objectKey]: object[objectKey],
    };
  }
  return accumulator;
};

// Exclude key from object
// e.g. excludeKey({foo: 'bar'}, 'foo')
// => {}
const excludeKeys = (object, ...keys) => {
  if (typeof object !== "object") {
    throw new Error(`Invalid object ${object}`);
  }

  if ([undefined, null].includes(keys)) {
    return object;
  }

  if (keys.filter((key) => typeof key !== "string").length > 0) {
    throw new Error(`Invalid key type ${typeof key}`);
  }

  return Object.getOwnPropertyNames(object).reduce(reducer(object, keys), {});
};

export default excludeKeys;
