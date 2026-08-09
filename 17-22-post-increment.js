// let number = 5;
// console.log("First = ",number);
// number++;
// console.log("Final = ",number)

const postIncrement = (number) => {
  console.log(`First = ${number}`)
  number++;
  return `Final = ${number}`
}

console.log(postIncrement(5))