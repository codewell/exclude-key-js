const lib = require("../lib/index.js");

test("No arguments should throw", () => {
  expect(() => {
    lib();
  }).toThrow();
});

test("Empty object no key", () => {
  expect(lib({})).toEqual({});
});

test("Empty object empty key", () => {
  expect(lib({}, "")).toEqual({});
});

test("Empty object key", () => {
  expect(lib({}, "foo")).toEqual({});
});

test("{foo: 'bar'}, '' => {foo: 'bar'}", () => {
  expect(lib({ foo: "bar" }, "")).toEqual({ foo: "bar" });
});

test("{foo: 'bar'}, 'foo' => {}", () => {
  expect(lib({ foo: "bar" }, "foo")).toEqual({});
});

test("{ one: 1, two: 2, three: 3 }, 'two' => { one: 1, three: 3 }", () => {
  expect(lib({ one: 1, two: 2, three: 3 }, "two")).toEqual({
    one: 1,
    three: 3,
  });
});

test("{ one: 1, two: 2, three: 3 }, 'two', 'three' => { one: 1, three: 3 }", () => {
  expect(lib({ one: 1, two: 2, three: 3 }, "two", "three")).toEqual({
    one: 1,
  });
});

test("{ one: 1, two: 2, three: 3 } should throw", () => {
  expect(() => {
    lib({ one: 1, two: 2, three: 3 }, "two", 1);
  }).toThrow();
});
