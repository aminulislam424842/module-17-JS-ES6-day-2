// Equality Checker

const equalityChecker = (a, b) => {
  return {
    looseEquality: a == b,
    strictEquality: a === b
  };
};

const result = equalityChecker(5, "5");

console.log("==", result.looseEquality);
console.log("===", result.strictEquality);