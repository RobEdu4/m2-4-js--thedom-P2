// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  expect(
    insert([{ name: "Bob" }, { name: "Billy" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Bob", isAvailable: true },
    { name: "Billy", isAvailable: true },
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
