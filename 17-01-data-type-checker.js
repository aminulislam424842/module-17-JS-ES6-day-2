// Data Type Checker

const value = ["Hello", 25, true, null, undefined];
for (let i = 0; i < value.length; i++) {
  const type = typeof value[i];
  console.log(type);
}