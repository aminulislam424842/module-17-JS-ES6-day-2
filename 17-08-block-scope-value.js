// Block Scope Value

const blockScope = () => {
  let x = 10;
  let result;
  {
    let y = 20;
    result = {
      Outside: x,
      inside: y
    }
  }
  return result;
}

console.log(blockScope())