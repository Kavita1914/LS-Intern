// const students = [
//     { name: 'Alice', scores: [95, 85, 90] },
//     { name: 'Bob', scores: [70, 75, 80] },
//     { name: 'Charlie', scores: [88, 92, 85] },
//     { name: 'David', scores: [60, 65, 70] },
//     { name: 'Eve', scores: [98, 100, 95] }
//   ];
  
//   1. Calculate the average score for each student
//   2. Find the student with the highest average score
//   3. Filter out the students who have an average score below 80


//   An array of product objects, each with the following structure:
//   const products = [
//     { id: 1, name: 'Laptop', price: 1000 },
//     { id: 2, name: 'Phone', price: 500 },
//     { id: 3, name: 'Tablet', price: 750 },
//     { id: 4, name: 'Monitor', price: 300 },
//     { id: 5, name: 'Headphones', price: 150 }
//   ];
  
//   An array of order objects, each with the following structure:
  
  // const orders = [
  //   { orderId: 1, customerId: 1, items: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }] },
  //   { orderId: 2, customerId: 2, items: [{ productId: 3, quantity: 1 }] },
  //   { orderId: 3, customerId: 1, items: [{ productId: 4, quantity: 2 }, { productId: 5, quantity: 1 }] },
  //   { orderId: 4, customerId: 3, items: [{ productId: 2, quantity: 3 }, { productId: 5, quantity: 2 }] }
  // ];
  
//   Your tasks are:
  
//   Calculate the total value of each order.
//   Identify the customer who spent the most money.
//   Find the most frequently ordered product.
//   List all customers who ordered a specific product (e.g., product with ID 2).

  const students = [
    { name: 'Alice', scores: [95, 85, 90] },
    { name: 'Bob', scores: [70, 75, 80] },
    { name: 'Charlie', scores: [88, 92, 85] },
    { name: 'David', scores: [60, 65, 70] },
    { name: 'Eve', scores: [98, 100, 95] }
  ];

  // average score for each student

  let allScores = students.map(getScores)
  let scoreArray = allScores.flat(1)
  let average=[], firstArray

  function getScores(a) {
  return[a.scores]
  }
 let newObj = {}
 for(let i=0; i<5; i++) {
  firstArray = scoreArray[i]
  average[i] = (firstArray[0] + firstArray[1] + firstArray[2] ) / 3
  newObj = { Name:students[i].name, Average:average[i] };
  console.log( newObj );
}

// student with the highest average score

let highestAverage = -1
average.forEach(e => {
  if ( e > highestAverage ) {
    highestAverage = e
  }
})
console.log("Highest Average Score : ", highestAverage);

// console.log("highest : ", average.find(highest));
// function highest(x) {
//    return x > y
// }

// students who have an average score below 80

console.log("Below 80 : ", average.filter(below));

function below(x) {
  return x < 80
}

// second problem
let value = []
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 750 },
  { id: 4, name: 'Monitor', price: 300 },
  { id: 5, name: 'Headphones', price: 150 }
];

const orders = [
  { orderId: 1, customerId: 1, items: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }] },
  { orderId: 2, customerId: 2, items: [{ productId: 3, quantity: 1 }] },
  { orderId: 3, customerId: 1, items: [{ productId: 4, quantity: 2 }, { productId: 5, quantity: 1 }] },
  { orderId: 4, customerId: 3, items: [{ productId: 2, quantity: 3 }, { productId: 5, quantity: 2 }] }
];
//  let orders1 = orders[0].items[0]
//  console.log("uu", orders[0].items[0].quantity * products[0].price);
// console.log("orders", orders1.quantity)
// console.log("mm", products[0].price);

// for( let i=0; i<4; i++) {
//   value[i] = ( orders[i].items[i].quantity ) * products[i].price
// }
// console.log("Total value of each order : ", value );