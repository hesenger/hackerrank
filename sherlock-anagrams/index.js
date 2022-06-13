/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function sherlockAndAnagrams(s) {
  const substrs = s.split("").reduce((memo, _, index) => {
    for (let i = index + 1; i <= s.length; i++) {
      const word = s.substring(index, i).split("").sort().join("");
      memo[word] = memo[word] || 0;
      memo[word]++;
    }

    return memo;
  }, {});

  console.log({ substrs });
  return Object.entries(substrs).reduce((sum, [_, qty]) => sum + qty - 1, 0);
}

module.exports = sherlockAndAnagrams;
