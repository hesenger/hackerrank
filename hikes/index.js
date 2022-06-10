function countingValleys(steps, path) {
  return path.split("").reduce(
    (memo, step) => {
      if (memo.depth === 0 && step === "D") {
        memo.valleys++;
      }
      memo.depth += step === "D" ? -1 : 1;
      return memo;
    },
    { depth: 0, valleys: 0 },
  ).valleys;
}

module.exports = countingValleys;
