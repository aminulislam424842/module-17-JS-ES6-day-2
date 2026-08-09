const studentList = (name) => {
  name.forEach((element, index) => {
    console.log(index, element);
  });
}
studentList(["Aminul", "Nafis", "Tamim"])