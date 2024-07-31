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

import { useState } from "react";
import Btn from "./components/Btn";

export default function App() {
    const [ str, setStr ] = useState([])
    console.log("str", str);
    const [ todo, setTodo ] = useState([])
    console.log("todo", todo);

    return (
        <>
        <label>Enter your To-Dos : </label>
        <input className="input" onChange={(el) => setStr(el.target.value)}  value={str} required/>
        <button className="btn1" onClick={() => {
            if(str === ""){
                alert("Please enter some text")
            }
            else {
                setTodo((allTodos) => [...allTodos , str])
            setStr("")
            }
        }     
        }>Add</button>
        <Btn t={todo}/>
        </>
    )
}