const checkMagazine = require(".");

it("example", () => {
  const res = checkMagazine(
    "give me one grand today night".split(" "),
    "give one grand today".split(" "),
  );
  expect(res).toBe("Yes");
});

it("example 2", () => {
  const res = checkMagazine(
    "two times three is not four".split(" "),
    "two times two is four".split(" "),
  );
  expect(res).toBe("No");
});
