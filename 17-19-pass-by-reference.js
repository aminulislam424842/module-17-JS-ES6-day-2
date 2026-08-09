function updateAge(person) {
  person.age = 30; 
  console.log("Inside function:", person.age);
}

let user = { name: "Aminul", age: 22 };
updateAge(user);

console.log("Original =", user.age); 