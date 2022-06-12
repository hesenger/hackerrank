/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */
function twoStrings(s1, s2) {
  return s1.split("").some((letter) => s2.indexOf(letter) > -1) ? "YES" : "NO";
}

module.exports = twoStrings;
