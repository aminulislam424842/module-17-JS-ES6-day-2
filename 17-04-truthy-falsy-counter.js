// Truthy Falsy Counter

const counter = (value) => {
  let truthy = 0;
  let falsy = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i]) {
      truthy++;
    } else {
      falsy++;
    }
  }
  return {
    truthy, falsy
  }
}

const value = [0, 1, "", "JS", false, true, null, 25];
console.log(counter(value))