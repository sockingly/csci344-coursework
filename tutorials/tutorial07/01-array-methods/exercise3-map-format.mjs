const students = [
    { name: "Alice", age: 20, grade: 85, major: "Computer Science" },
    { name: "Bob", age: 21, grade: 92, major: "Mathematics" },
    { name: "Charlie", age: 19, grade: 78, major: "Computer Science" },
    { name: "Diana", age: 22, grade: 95, major: "Physics" },
    { name: "Eve", age: 20, grade: 88, major: "Computer Science" }
];

// Your code here
// Hint: Use map + build a template literal 
// (backticks) in the callback function

//01
// const myCallback = (item) => console.log(item.name);
// students.forEach(myCallback);

//map - 02
// const names = students.map((item) => item.name);
// console.log(names);

const names = students.map(item => "<p><strong>" + item.name + ":</strong>" + item.major + "</p>")
console.log(names);