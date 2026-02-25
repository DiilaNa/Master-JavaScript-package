// -----------Get names of products that cost more than 2500.----------
const products = [
  { name: "Laptop", price: 100000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 3000 },
];

let p1 = products.filter((x) => x.price > 2500);
let names = p1.map((x) => x.name);

console.log(names);

names.forEach((x) => console.log(x));

// Short Optmize way

products
  .filter((x) => x.price > 2500)
  .map((x) => x.name)
  .forEach((x) => console.log(x));

//----------- Count how many times each fruit appears.--------------------------
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const c = fruits.reduce(
  (acc, value) => ((acc[value] = (acc[value] || 0) + 1), acc),
  {},
);

console.log(c);

// ----------------------  Find average age.------------------

const people = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 40 },
];

let a = people.reduce((acc, value) => acc + value.age, 0);

let avg = a / people.length;
console.log(avg);

//---------------Group users by role.--------------------
const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];

let roles = users.reduce((acc, user) => {
  if (!acc[user.role]) acc[user.role] = [];
  acc[user.role].push(user);
  return acc;
}, {});
console.log(roles);

// ------------------------find duplicate values------------------
const numbers = [1, 2, 2, 3, 4, 4, 5];

const count = numbers.reduce(
  (acc, value) => ((acc[value] = (acc[value] || 0) + 1), acc),
  {},
);

const duplicates = [];
for (num in count) {
  if (count[num] > 1) duplicates.push(num);
}
console.log(duplicates);



// --------------------------------

const orders = [
  { userId: 1, total: 5000 },
  { userId: 2, total: 3000 },
  { userId: 1, total: 2000 },
];

const result = orders.reduce((acc, order) => {
  acc[order.userId] = (acc[order.userId] || 0) + order.total;
  return acc;
}, {});

console.log(result);