const findUser = (users, searchId) => {
  return users.find(user => user.id === searchId);
};

const users = [
  { id: 1, name: "Aminul" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" }
];

console.log(findUser(users, 2));