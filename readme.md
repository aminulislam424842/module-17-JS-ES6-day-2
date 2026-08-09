# 🚀 Module 17 — JavaScript Core Concepts | Day 2

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Practice](https://img.shields.io/badge/Practice-30%20Tasks-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black)

**A complete collection of JavaScript Core Concepts practice problems and solutions.**

</div>

---

## 📌 About This Module

This repository contains my **Module 17 — JavaScript Core Concepts (Day 2)** practice tasks from the **Programming Hero — AI Driven Full Stack Web Development** course.

The main focus of this module is to strengthen JavaScript fundamentals through practical coding problems and understand how JavaScript behaves internally.

### Topics Covered

- Data Types
- Primitive Values
- `null` vs `undefined`
- Truthy & Falsy Values
- Equality Operators
- Scope
- Hoisting
- Closures
- Callback Functions
- Pass by Value
- Pass by Reference
- Pre-Increment & Post-Increment
- Array Higher-Order Methods
- `map()`
- `forEach()`
- `filter()`
- `find()`
- `slice()`
- `reduce()`
- Real-world JavaScript Problem Solving

---

## 🎯 Learning Objectives

By completing this module, I focused on developing a strong understanding of:

- JavaScript data types and type checking
- Primitive and non-primitive values
- Truthy and falsy behavior
- Loose and strict equality
- Global, block and lexical scope
- JavaScript hoisting
- Closure and data privacy
- Callback functions
- Value vs reference behavior
- Increment operators
- Array transformation and processing methods
- Functional programming concepts
- Real-world problem-solving using JavaScript

---

# 📚 Module Topics

## 1. Data Types

Understanding JavaScript data types and identifying primitive values.

## 2. Null & Undefined

Understanding the differences between `null` and `undefined`.

## 3. Truthy & Falsy

Learning how JavaScript evaluates values in Boolean contexts.

## 4. Equality

Understanding the difference between:

```javascript
==
```

and

```javascript
===
```

## 5. Scope

Practicing:

- Global Scope
- Block Scope
- Function Scope
- Lexical Scope

## 6. Hoisting

Understanding how JavaScript handles variable and function declarations before execution.

## 7. Closure

Learning how inner functions preserve access to variables from their outer function.

## 8. Callback Functions

Understanding how functions can be passed as arguments and executed later.

## 9. Pass by Value & Reference

Understanding how JavaScript handles primitive values and objects.

## 10. Increment Operators

Practicing:

```javascript
++value
```

and

```javascript
value++
```

## 11. Array Methods

Practical use of:

```javascript
map()
forEach()
filter()
find()
slice()
reduce()
```

---

# 📝 Task List

| # | Task | Main Concept |
|---|------|--------------|
| 01 | Data Type Checker | `typeof` |
| 02 | Primitive Type Counter | Primitive Values |
| 03 | Null vs Undefined | `null`, `undefined` |
| 04 | Truthy/Falsy Counter | Truthy & Falsy |
| 05 | Equality Checker | `==`, `===` |
| 06 | Mixed Equality | Loose Equality |
| 07 | Global Scope Value | Global Scope |
| 08 | Block Scope Value | Block Scope |
| 09 | Hoisting Test | Hoisting |
| 10 | Scope Value Resolver | Lexical Scope |
| 11 | Counter Closure | Closure |
| 12 | Private Counter | Closure & Data Privacy |
| 13 | Bank Balance Closure | Closure |
| 14 | Greeting Closure | Closure |
| 15 | Callback Greeting | Callback Function |
| 16 | Callback Calculator | Callback Function |
| 17 | Callback Result Checker | Callback Function |
| 18 | Pass by Value | Primitive Data |
| 19 | Pass by Reference | Object Reference |
| 20 | Array Reference Update | Reference Mutation |
| 21 | Pre-Increment | Pre-Increment |
| 22 | Post-Increment | Post-Increment |
| 23 | Map Price Increase | `map()` |
| 24 | forEach Student List | `forEach()` |
| 25 | Filter Even Numbers | `filter()` |
| 26 | Filter Passed Students | `filter()` |
| 27 | Find User | `find()` |
| 28 | Slice Array | `slice()` |
| 29 | Reduce Total | `reduce()` |
| 30 | Smart Student Result | `filter()` + `reduce()` |

---

# 📂 Project Structure

```text
module-17-js-es6-day-2/
│
├── 17-01-data-type-checker.js
├── 17-02-primitive-type-counter.js
├── 17-03-null-vs-undefined.js
├── 17-04-truthy-falsy-counter.js
├── 17-05-equality-checker.js
├── 17-06-mixed-equality.js
├── 17-07-global-scope-value.js
├── 17-08-block-scope-value.js
├── 17-09-hoisting-test.js
├── 17-10-scope-value-resolver.js
├── 17-11-counter-closure.js
├── 17-12-private-counter.js
├── 17-13-bank-balance-closure.js
├── 17-14-greeting-closure.js
├── 17-15-callback-greeting.js
├── 17-16-callback-calculator.js
├── 17-17-callback-result-checker.js
├── 17-18-pass-by-value.js
├── 17-19-pass-by-reference.js
├── 17-20-array-reference-update.js
├── 17-21-pre-increment.js
├── 17-22-post-increment.js
├── 17-23-map-price-increase.js
├── 17-24-foreach-student-list.js
├── 17-25-filter-even-numbers.js
├── 17-26-filter-passed-students.js
├── 17-27-find-user.js
├── 17-28-slice-array.js
├── 17-29-reduce-total.js
├── 17-30-smart-student-result.js
│
└── README.md
```

---

# 🧠 Core JavaScript Concepts

## Primitive Data Types

JavaScript primitive data types include:

```javascript
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

Example:

```javascript
const name = "Aminul";
const age = 21;
const isStudent = true;
```

---

## Truthy & Falsy Values

Common falsy values:

```javascript
false
0
""
null
undefined
NaN
```

Almost every other value is considered truthy.

---

## Equality Operators

### Loose Equality

```javascript
5 == "5";
```

Output:

```javascript
true
```

### Strict Equality

```javascript
5 === "5";
```

Output:

```javascript
false
```

Strict equality checks both **value and data type**.

---

# 🔐 Scope & Closure

## Scope

JavaScript commonly works with:

```text
Global Scope
Block Scope
Function Scope
Lexical Scope
```

## Closure

A closure occurs when an inner function remembers and accesses variables from its outer function even after the outer function has finished executing.

Example:

```javascript
const createCounter = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    };
};

const counter = createCounter();

console.log(counter());
console.log(counter());
```

Output:

```text
1
2
```

---

# 📞 Callback Functions

A callback is a function passed into another function as an argument.

Example:

```javascript
const calculate = (a, b, operation) => {
    return operation(a, b);
};

const add = (a, b) => a + b;

console.log(calculate(10, 5, add));
```

Output:

```text
15
```

---

# 🔄 Pass by Value vs Pass by Reference

## Pass by Value

Primitive values are copied when assigned or passed.

```javascript
let number = 10;

const updateNumber = (value) => {
    value = 50;
};

updateNumber(number);

console.log(number);
```

Output:

```text
10
```

## Pass by Reference

Objects can be mutated through their reference.

```javascript
const user = {
    name: "Aminul"
};

const updateUser = (person) => {
    person.name = "Rahim";
};

updateUser(user);

console.log(user.name);
```

Output:

```text
Rahim
```

---

# ⚡ Pre-Increment vs Post-Increment

## Pre-Increment

```javascript
let number = 5;

console.log(++number);
```

Output:

```text
6
```

## Post-Increment

```javascript
let number = 5;

console.log(number++);
```

Output:

```text
5
```

After execution:

```javascript
number === 6;
```

---

# 📊 Array Higher-Order Methods

## map()

Creates a new array by transforming every element.

```javascript
const numbers = [10, 20, 30];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```text
[20, 40, 60]
```

---

## forEach()

Executes a function for every element.

```javascript
const students = ["Aminul", "Rahim", "Karim"];

students.forEach(student => {
    console.log(student);
});
```

---

## filter()

Returns elements that satisfy a condition.

```javascript
const marks = [85, 45, 70, 32, 90];

const passed = marks.filter(mark => mark >= 50);

console.log(passed);
```

Output:

```text
[85, 70, 90]
```

---

## find()

Returns the first element that satisfies a condition.

```javascript
const users = [
    { id: 1, name: "Aminul" },
    { id: 2, name: "Rahim" }
];

const user = users.find(user => user.id === 2);

console.log(user);
```

Output:

```text
{ id: 2, name: "Rahim" }
```

---

## slice()

Extracts a portion of an array without modifying the original array.

```javascript
const numbers = [10, 20, 30, 40, 50];

const selected = numbers.slice(1, 4);

console.log(selected);
```

Output:

```text
[20, 30, 40]
```

---

## reduce()

Reduces an array into a single value.

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log(total);
```

Output:

```text
100
```

---

# ⭐ Smart Student Result

The final task combines multiple JavaScript concepts.

Example:

```javascript
const students = [
    { name: "Aminul", marks: 85 },
    { name: "Rahim", marks: 62 },
    { name: "Karim", marks: 45 },
    { name: "Hasan", marks: 91 }
];
```

The program processes student data using:

```javascript
filter()
reduce()
```

and calculates useful result information such as:

- Passed students
- Failed students
- Total marks
- Average marks

This task demonstrates how JavaScript array methods can be combined to solve real-world problems.

---

# 🛠️ Technologies Used

- JavaScript
- ES6+
- Node.js
- VS Code
- Git
- GitHub

---


---

# 📈 Learning Progress

```text
Module 17 — JavaScript Core Concepts
│
├── Data Types                 ✅
├── Primitive Values           ✅
├── Null & Undefined           ✅
├── Truthy & Falsy             ✅
├── Equality                   ✅
├── Scope                      ✅
├── Hoisting                   ✅
├── Closure                    ✅
├── Callback Function          ✅
├── Pass by Value              ✅
├── Pass by Reference          ✅
├── Increment Operators        ✅
├── map()                      ✅
├── forEach()                  ✅
├── filter()                   ✅
├── find()                     ✅
├── slice()                    ✅
├── reduce()                   ✅
└── Problem Solving            ✅
```

---

# 🎓 Key Takeaways

After completing this module, I have strengthened my understanding of:

- How JavaScript handles different data types
- Primitive and non-primitive values
- `null` and `undefined`
- Truthy and falsy values
- `==` vs `===`
- JavaScript scope and hoisting
- Closures and private state
- Callback functions
- Pass by value and pass by reference
- Pre-increment and post-increment
- JavaScript array higher-order methods
- Functional programming concepts
- Practical problem-solving with JavaScript

---

# 🚀 What's Next?

The next step is to apply these concepts in larger JavaScript projects and continue improving problem-solving skills while progressing toward modern JavaScript and full-stack development.

---

## 👨‍💻 Author

### Md. Aminul Islam Mahi

**• Full Stack Developer In Progress**

Passionate about building modern web applications, improving problem-solving skills, and learning full-stack development.

---

<div align="center">

### ⭐ If you find this repository helpful, consider giving it a star!

**Built with ❤️ using JavaScript**

</div>
