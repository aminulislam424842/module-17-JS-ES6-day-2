const calculateTotal = (prices) => {
  return prices.reduce((total, prices) => total + prices, 0)
}

const prices = [100, 200, 300, 400];

console.log(calculateTotal(prices))