const checkMagazine = require(".");

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "log");
});

it("example", () => {
  const res = checkMagazine(
    "give me one grand today night".split(" "),
    "give one grand today".split(" "),
  );
  expect(console.log).toBeCalledWith("Yes");
});

it("example 2", () => {
  const res = checkMagazine(
    "two times three is not four".split(" "),
    "two times two is four".split(" "),
  );
  expect(console.log).toBeCalledWith("No");
});
