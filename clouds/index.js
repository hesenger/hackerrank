/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */
function jumpingOnClouds(c) {
  const path = [];
  let current = 0;
  while (current < c.length) {
    path.push(current);

    const next = current + 2;
    current = c[next] === 0 ? next : current + 1;
  }

  return path.length - 1;
}

module.exports = jumpingOnClouds;
