function maxProfit(prices: number[]): number {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      buy = sell;
    }
    sell += 1;
  }
  console.log(maxProfit);

  return maxProfit;
}

maxProfit([10, 8, 7, 5, 2]);
