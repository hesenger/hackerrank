const countingValleys = require(".");

it("example", () => {
  const res = countingValleys(8, "UDDDUDUU");
  expect(res).toBe(1);
});
