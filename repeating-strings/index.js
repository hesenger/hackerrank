/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */
function repeatedString(s, n) {
  const occurPerRepetition = s
    .split("")
    .reduce((sum, char) => (sum += char === "a" ? 1 : 0), 0);

  const fullRepetitions = Math.floor(n / s.length);
  const lastRepLenght = n % s.length;
  const occurLastRep = s
    .split("")
    .reduce(
      (sum, char, index) =>
        (sum += index < lastRepLenght && char === "a" ? 1 : 0),
      0,
    );

  return fullRepetitions * occurPerRepetition + occurLastRep;
}

module.exports = repeatedString;
