// 01.. Given an array of student objects:
let students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 55 },
  { name: "Charlie", marks: 90 },
  { name: "David", marks: 40 },
];

//Use map() to create a new array of strings 
// like "Alice scored 80 marks"

let newArray = students.map(students => `${students.name} scored ${students.marks} marks`)
// console.log(newArray);

// 02. Using the same students array, calculate the average
//  marks of students who scored more than 50.

// get students who scored more than 50 marks

let BestStudents = students.filter(x => x.marks>50)
console.log(BestStudents)

//get a sum

let sumofmarks = BestStudents.reduce((acc,value)=> acc+value.marks,0)
console.log(sumofmarks);

let averageMarks = sumofmarks/BestStudents.length
console.log(averageMarks);



