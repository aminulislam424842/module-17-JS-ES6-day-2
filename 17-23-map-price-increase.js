const applyVat = (prices, vat = 0) => {
  let priceAfterVat = prices.map(x => {
    let vatPrice = (x * vat) / 100;
    let applyAfterVat = x + vatPrice;
    return applyAfterVat;
  })
  return priceAfterVat
}

console.log(applyVat([100, 200, 300], 10));