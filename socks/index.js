function sockMerchant(n, ar) {
  const stacks = ar.reduce((memo, item) => {
    memo[item] = memo[item] || 0;
    memo[item]++;
    return memo;
  }, {});

  return Object.values(stacks).reduce((sum, item) => {
    const pairs = Math.floor(item / 2);
    return sum + pairs;
  }, 0);
}

module.exports = sockMerchant;
