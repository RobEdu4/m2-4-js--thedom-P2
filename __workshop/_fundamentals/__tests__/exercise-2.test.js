// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  expect(redacted(["redacted", true, 52])).toStrictEqual([
    "redacted",
    true,
    52,
  ]);
});
expect(redacted(["newstring", true, "/^[A-Za-z0-9]+$/g"])).toStrictEqual([
  "redacted",
  true,
  /^[A-Za-z0-9]+$/g,
]);

// More info on jest expect: https://jestjs.io/docs/en/expect
