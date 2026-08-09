const checkStudentResult = (studentName, studentMarks, resultChecker) => {
  return resultChecker(studentName, studentMarks);
};

const evaluateStudentResult = (studentName, studentMarks) => {
  if (studentMarks >= 50) {
    return `${studentName} Passed`;
  }
  return `${studentName} Failed`;
};

console.log(checkStudentResult("Aminul", 80, evaluateStudentResult));
console.log(checkStudentResult("Nafis", 8, evaluateStudentResult));