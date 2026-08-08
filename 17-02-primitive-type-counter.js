// Primitive Type Counter

const checkingData = (type) => {
  let value =0;
  for(let i=0;i<type.length;i++){
    if (type === null || typeof type !== "object"||typeof type !== "function"){
      value++;
    }
  }
  return `Primitive Values = ${value}`
}

console.log(checkingData([10, "JS", true, null, 20, "Hello"]));