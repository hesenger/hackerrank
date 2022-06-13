const sherlockAndAnagrams = require(".");

it("sample 1", () => {
  const res = sherlockAndAnagrams("ifailuhkqq");
  expect(res).toBe(3);
});

it("sample 2", () => {
  const res = sherlockAndAnagrams("kkkk");
  expect(res).toBe(10);
});

it.only("sample 3", () => {
  const res = sherlockAndAnagrams("cdcd");
  expect(res).toBe(5);
});
