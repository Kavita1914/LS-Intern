// import { useState } from "react"

// export default function App() {
//     const [ str, setStr ] = useState([])
//     console.log("str", str);
//     const [ todo, setTodo ] = useState([])
//     console.log("todo",todo);
//     return (
//         <>
//         <label>Enter your to-dos : </label>
//         <input className="input" onChange={(el) => setStr(el.target.value)}/>
//         <button className="btn" onClick={() =>
//             setTodo((allTodos) =>
//             [...allTodos, str]
//             )
//         }>Add</button>
//         <h3>list of all To-Dos : </h3>
//         <ul>
//         {todo.map((data) => {
//             return (
//                 // <p key={Math.random()}>{data}</p>
//                     <li key={Math.random()}>{data}</li>
//             )
//         })}
//         </ul>
//         </>
//     )
// }

// import { useState } from "react";
// import Todo from "./components/Todo";

// export default function App() {

//     const [ str, setStr ] = useState("")
//     const [ todo, setTodo ] = useState([])
//     console.log("str", str);

//     function Check(str) {
//         if ( str === "" ) {
//             alert("Please enter some text")
//         }
//         else {
//             setTodo((allTodos) => [...allTodos , str])
//             setStr("")
//         }
//     }

//     return (
//         <>
//         <label>Enter your To-Dos : </label>
//         <input className="input" onChange={(el) => setStr(el.target.value)}  value={str} required/>
//         <button className="btn1" onClick={() => Check(str)}> Add </button>
//         <Todo t = {todo} />
//         </>
//     )
// }

// import { useEffect, useState } from "react";
// import Todo from "./components/Todo";

// export default function App() {

//     const [ str, setStr ] = useState("")
//     const [ todo, setTodo ] = useState([])
//     console.log("str", str);

//     function Check(str) {
        // if ( str === "" ) {
        //     alert("Please enter some text")
        // }
        // else {
        //     setTodo((allTodos) => [...allTodos , str])
        //     setStr("")
        // }
//     }

//     return (
//         <>
//         <label>Enter your To-Dos : </label>
//         <input className="input" onChange={(el) => setStr(el.target.value)}  value={str} required/>
//         <button className="btn1" onClick={() => Check(str)}> Add </button>
//         <Todo t = {todo} />
//         </>
//     )
// }

// import { useEffect, useState } from "react";
// import Todo from "./components/Todo";

// export default function App() {
//   const [str, setStr] = useState("");
//   const [todo, setTodo] = useState([]);
//   // console.log("str", str);
//   console.log("todo", todo);

//   function handleButton() {
//     if (str === "") {
//       alert("Please enter some text");
//     } else {
//       setTodo((allTodos) => [...allTodos, str]);
//       setStr("");
//     }
//   }

//   useEffect(() => {
//     console.log("STR", str);
//   }, [str]);

//   return (
//     <>
//       <label>Enter your To-Dos : </label>
//       <input
//         className="input"
//         onChange={(el) => setStr(el.target.value)}
//         value={str}
//         required
//       />
//       <button className="btn1" onClick={handleButton}>
//         {" "}
//         Add{" "}
//       </button>
//     </>
//   );
// }


// import { useState, useRef, useEffect } from "react";
// import Todo from "./components/Todo";

// export default function App() {

//     const [ str, setStr ] = useState('')
//     const inputRef = useRef('')

//     console.log("str", str)
//     console.log("inputRef.current", inputRef.current.value);
//     console.log("inputRef", inputRef);

    
//     function handelBtn(){
//         setStr(inputRef.current.value)
//         inputRef.current.value = '';
//     }

//     return (
//         <>
//         <label>Enter your Todos : </label>
//         <input className="input" type="text" ref={inputRef} />
//         <button className="btn1" onClick={handelBtn}> Add </button>
//         <Todo t = {str} /> 
//         </>
//     )
// }


import { useState } from "react";
import Todo from "./components/Todo";

export default function App() {

    const [ str, setStr ] = useState('')
    const [ arr, setArr ] = useState('')

    // console.log("str", str)
    // console.log("arr", arr)
        
    function handleBtn() {       
        setArr(str)
        setStr('')
    }

    return (
        <>
        <label>Enter your To-dos here : </label>
        <input className="input" type="text" value={str} onChange={(e) => setStr(e.target.value)}/>
        <button className="btn1" onClick={handleBtn}> Add </button>
        <Todo t = {arr} /> 
        </>
    )
}
