const executeGreeting = (userName, greetingFunction) => {
  return greetingFunction(userName);
};

const createGreeting = (userName) => {
  return `Hello ${userName}`;
};

console.log(executeGreeting("Aminul", createGreeting));
console.log(executeGreeting("Nafis", createGreeting));