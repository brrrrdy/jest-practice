const { sum, capitalize } = require("./src/ui");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalizes entire string", () => {
  expect(capitalize("london")).toBe("LONDON");
});
