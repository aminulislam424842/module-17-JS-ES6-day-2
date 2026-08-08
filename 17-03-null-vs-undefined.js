const checkValue = (value) => {
  console.log("Value:", value);
  console.log("Type:", typeof value);
  console.log("Is Undefined:", value === undefined);
  console.log("Is Null:", value === null);
};

let a;
let b = undefined;
let c = null;

checkValue(a);
checkValue(b);
checkValue(c);