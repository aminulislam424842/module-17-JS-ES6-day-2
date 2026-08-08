const getting = (greeting = "Hello") => {
  
  return (name = "Guest") => {
    return `${greeting} ${name}`
  }
}

const result= getting();

console.log(result("Aminul"));
console.log(result("Nafis"));
console.log(result("Tamim"));
console.log(result());