const mixedEquality = (values) => {
  let result = {};

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      result[`${values[i]} == ${values[j]}`] = values[i] == values[j];
    }
  }

  return result;
};

const values = [0, false, null, undefined];

console.log(mixedEquality(values));