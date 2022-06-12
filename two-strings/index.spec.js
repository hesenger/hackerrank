const twoStrings = require(".");

it("sample 1", () => {
  const res = twoStrings("hello", "world");
  expect(res).toBe("YES");
});

it("sample 2", () => {
  const res = twoStrings("hi", "world");
  expect(res).toBe("NO");
});
