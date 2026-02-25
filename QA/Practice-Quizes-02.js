// 01 -- Create a new array with each number doubled.
const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((x) => x * 2);
console.log(newArray);

// 02 - Filter and Return only active users.

const users = [
  { id: 1, name: "Dilan", active: true },
  { id: 2, name: "Nimal", active: false },
  { id: 3, name: "Saman", active: true },
];

const active = users.filter((x) => x.active == true);
console.log(active);

//From same users array,👉 Return array of only names.
let name = users.map((x) => x.name);
console.log(name);

// name.forEach(x => console.log(x))

const cart = [
  { name: "Book", price: 500, qty: 2 },
  { name: "Pen", price: 50, qty: 5 },
];

//Calculate total bill amount.
const price = cart.map((x) => x.price * x.qty);
console.log(price);

const total = price.reduce((acc, value) => acc + value, 0);
console.log(`The toal cart price is Rs.${total}.00/=`);