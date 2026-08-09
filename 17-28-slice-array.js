const getSelectedNumbers = (numbers) => {
  return numbers.slice(1, 4);
};

const numbers = [10, 20, 30, 40, 50, 60];

console.log(numbers);
console.log(getSelectedNumbers(numbers));