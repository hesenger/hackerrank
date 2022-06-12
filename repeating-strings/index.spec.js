const repeatedString = require(".");

it("example", () => {
  const res = repeatedString("aba", 10);
  expect(res).toBe(7);
});
