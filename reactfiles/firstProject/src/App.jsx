// function App() {
//   return (<button>hello</button>)

// }
// export default function myApp() {
//   return (<div>
//     <h1>welcome to my App</h1>
//     <App/>
//   </div>)
// }

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
//   { title: 'Onion', isFruit: false, id: 5 },
//   { title: 'Potato', isFruit: false, id: 6 },
//   { title: 'Orange', isFruit: true, id: 4 }
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }/

import { useState } from "react";
import BtnCount from "./components/BtnCount";

export default function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <h1>Count</h1>
      <button
        className="btn"
        style={{ backgroundColor: "green" }}
        onClick={() => setcount(count + 1)}
      >
        Increase
      </button>
      {count <= 0 ? (
        <button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={() => setcount(0)}
        >
          Decrease
        </button>
      ) : (
        <button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={() => setcount(count - 1)}
        >
          Decrease
        </button>
      )}
      <button
        className="btn"
        style={{ backgroundColor: "yellow" }}
        onClick={() => setcount(0)}
      >
        Reset
      </button>

      <BtnCount countNum={count} />
    </>
  );
}

// export default function App() {

//     let x = 10
//     let count = 0

//     function increase() {
//         count = count + 1
//         console.log("count", count);
//         console.log(x);
//         console.log(x+10);

//     }
//     return (
//         <>
//          <h1>Hello!</h1>
//          <button onClick={increase}>click</button>
//          <p>{count}</p>
//         </>
//     )
// }
