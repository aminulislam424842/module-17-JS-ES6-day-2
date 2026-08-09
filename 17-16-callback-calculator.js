const callBackCalculator = (a, b, sum) => {
  return sum(a, b);
}

const addition = (a, b) => {
  return `Addition  = ${a + b}`
}

console.log(callBackCalculator(1, 2, addition))