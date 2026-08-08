const privateCounter = (start=0) => {
  let count = start;

  return () => {
    count++;
    return count;
  }
}

const result = privateCounter(10);

console.log(result());
console.log(result());
console.log(result());