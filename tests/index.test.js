const devLib = require("../lib/dev");
const prodLib = require("../lib/prod");

test("No arguments should throw", () => {
  expect(() => {
    devLib();
  }).toThrow();
});

test("Empty object no key", () => {
  expect(devLib({})).toEqual({});
});

test("Empty object empty key", () => {
  expect(devLib({}, "")).toEqual({});
});

test("Empty object key", () => {
  expect(devLib({}, "foo")).toEqual({});
});

test("{foo: 'bar'}, '' => {foo: 'bar'}", () => {
  expect(devLib({ foo: "bar" }, "")).toEqual({ foo: "bar" });
});

test("{foo: 'bar'}, 'foo' => {}", () => {
  expect(devLib({ foo: "bar" }, "foo")).toEqual({});
});

test("{ one: 1, two: 2, three: 3 }, 'two' => { one: 1, three: 3 }", () => {
  expect(devLib({ one: 1, two: 2, three: 3 }, "two")).toEqual({
    one: 1,
    three: 3,
  });
});

test("{ one: 1, two: 2, three: 3 }, 'two', 'three' => { one: 1, three: 3 }", () => {
  expect(devLib({ one: 1, two: 2, three: 3 }, "two", "three")).toEqual({
    one: 1,
  });
});

test("{ one: 1, two: 2, three: 3 } should throw", () => {
  expect(() => {
    devLib({ one: 1, two: 2, three: 3 }, "two", 1);
  }).toThrow();
});
