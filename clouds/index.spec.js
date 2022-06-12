const jumpingOnClouds = require(".");

it("example", () => {
  const res = jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);
  expect(res).toBe(3);
});
