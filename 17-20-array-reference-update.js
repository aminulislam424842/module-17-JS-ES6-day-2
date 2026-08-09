function arrayReferenceUpdate(arr) {
  arr.push(4, 5, 6);
  arr.pop();
  return arr;
}

let numbers = [1, 2, 3];

console.log(arrayReferenceUpdate(numbers))