/*
====================================================
Task 30 — Smart Student Result ⭐
====================================================

Objective:
Process student marks and calculate the final result.

Input:
A list of students with their names and marks.

Students:
- Aminul  → 85
- Rahim   → 62
- Karim   → 45
- Hasan   → 91

Requirements:
1. Store the student data in a suitable structure.

2. Use filter() to find the students who passed.
   Passing mark = 50

3. Use filter() to find the students who failed.

4. Use reduce() to calculate the total marks.

5. Calculate the average marks.
   Average = Total Marks / Number of Students

6. Calculate the total number of passed students.

7. Calculate the total number of failed students.

8. Store all final results together in a suitable structure.

Expected Output:
{
  passed: 3,
  failed: 1,
  total: 283,
  average: 70.75
}

Concepts to Practice:
- Arrow Function
- Array
- Object
- filter()
- reduce()
- length
- Basic Arithmetic
- Object
====================================================
*/

const processStudentResult = (students) => {
  const passedStudent = students.filter(student => student.marks>=50);
  const failedStudent = students.filter(student => student.marks<50);

  const totalMark = students.reduce((total,student) => total+ student.marks,0);

  const avgMark = totalMark/students.length;

  return {
    Passed : passedStudent.length,
    Failed : failedStudent.length,
    Total : totalMark,
    Average : avgMark
  }

}

const students = [
  { name: "Aminul", marks: 85 },
  { name: "Rahim", marks: 62 },
  { name: "Karim", marks: 45 },
  { name: "Hasan", marks: 91 }
];

console.log(processStudentResult(students));