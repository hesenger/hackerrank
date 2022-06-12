/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */
function checkMagazine(magazine, note) {
  const magazineStacks = magazine.reduce((memo, word) => {
    memo[word] = memo[word] || 0;
    memo[word]++;
    return memo;
  }, {});

  const noteStacks = note.reduce((memo, word) => {
    memo[word] = memo[word] || 0;
    memo[word]++;
    return memo;
  }, {});

  console.log(
    Object.entries(noteStacks).every(([word, value]) => {
      return magazineStacks[word] >= value;
    })
      ? "Yes"
      : "No",
  );
}

module.exports = checkMagazine;
