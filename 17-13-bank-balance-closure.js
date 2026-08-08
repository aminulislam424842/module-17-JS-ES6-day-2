const bankBalance = (balance = 0, deposit = 0, withdraw = 0) => {

  let total = balance;

  return (deposit, withdraw) => {

    const previousBalance = total;

    total = (total + deposit) - withdraw;

    return `Balance = ${previousBalance}, Deposit = ${deposit}, WithDraw = ${withdraw}
Final Balance = ${total}
`
  }
}

const totalAmount = bankBalance(1000);

console.log(totalAmount(500, 200))
console.log(totalAmount(100, 200))
console.log(totalAmount(500, 0))
console.log(totalAmount(0, 0))