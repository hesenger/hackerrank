const sockMerchant = require("./index");

it("initial example", () => {
  const res = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
  expect(res).toBe(2);
});
