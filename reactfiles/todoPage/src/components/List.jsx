// import Todo from "./Todo";
// import { useState } from "react";


// export default function Check(props) {
//     const [ todo, setTodo ] = useState([])
//     console.log("ppppppp", props.c);
//    if(props.c !== "") {
//     setTodo((allTodos) => [...allTodos , props.c])
//    }
//    <Todo t = {todo}/>

// }

// import { useState } from "react";
// import Todo from "./components/Todo";

// export default function App() {
//     const [str, setStr] = useState("");
//     const [todo, setTodo] = useState([]);

//     function Check() {
//         if (str === "") {
//             alert("Please enter some text");
//         } else {
//             setTodo((allTodos) => [...allTodos, str]);
//             setStr("");
//         }
//     }

//     function removeTodo(index) {
//         setTodo((allTodos) => allTodos.filter((_, i) => i !== index));
//     }

    // function editTodo(index, newText) {
    //     setTodo((allTodos) =>
    //         allTodos.map((todo, i) => (i === index ? newText : todo))
    //     );
    // }

//     return (
//         <>
//             <label>Enter your To-Dos: </label>
//             <input
//                 className="input"
//                 onChange={(el) => setStr(el.target.value)}
//                 value={str}
//                 required
//             />
//             <button className="btn1" onClick={Check}>
//                 Add
//             </button>
//             <Todo t={todo} removeTodo={removeTodo} editTodo={editTodo} />
//         </>
//     ); export default function Todo({ t, removeTodo, editTodo }) {
//         return (
//             <>
//                 <h3>List of all To-Dos:</h3>
//                 <div>
//                     <ol>
//                         {t.map((data, index) => (
//                             <div key={index}>
//                                 <li>
//                                     {data}
//                                     <div className="listDiv">
//                                         <div>
//                                             <button
//                                                 className="btn2"
//                                                 onClick={() => removeTodo(index)}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </div>
//                                         <div>
//                                             <button
//                                                 className="btn3"
//                                                 onClick={() => {
//                                                     const newText = prompt(
//                                                         "Enter new text:",
//                                                         data
//                                                     );
//                                                     if (newText) {
//                                                         editTodo(index, newText);
//                                                     }
//                                                 }}
//                                             >
//                                                 Edit
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </li>
//                             </div>
//                         ))}
//                     </ol>
//                 </div>
//             </>
//         );
//     }
    
// }


export default function List(props) {
    console.log("props",props);

   
    return (
        <>
        {props.l}
        <div className="listDiv">
            <div><button className="btn2" onClick={() => removeTodo(index)}>Remove</button></div>
            <div><button className="btn3">Edit</button></div>
        </div>
        </>
    )
    
}