

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

// Find the most frequently ordered product.
// List all customers who ordered a specific product (e.g., product with ID 2).

// Calculate the total value of each order.

let sum = orders.map((e) => {
    let total = 0
     e.items.map((i) => {
        products.map((p) => {
            if ( p.id === i.productId) {
                total += p.price * i.quantity
            }
        })
    })
    return {
        orderID: e.orderId,
        customerId: e.customerId,
        totalValue: total
    }
})
console.log("totalvalue : ", sum)

// Identify the customer who spent the most money.

let updatedTotal = []
sum.forEach((el) => {
    let findCurrent = updatedTotal.find((e) =>  e.customerId === el.customerId )
    {
        if (findCurrent == undefined) {
            updatedTotal.push(el)
        }
        else {
            findCurrent.totalValue += el.totalValue
        }

    }
    // console.log(findCurrent);

})
console.log("popopo", updatedTotal);
