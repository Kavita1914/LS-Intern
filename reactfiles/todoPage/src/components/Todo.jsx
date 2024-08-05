// import { useEffect, useState } from "react";

// export default function Todo(props) {

//   const [todo, setTodo] = useState([]);

  // useEffect(() => {
  //   if(props.t !== "" ) {
  //     setTodo((allTodos) => [...allTodos, props.t]);

  //   }
  // },[props.t])
//  console.log("props", todo);

//  function removeTodo(index) {
//   console.log("index", index);
//   setTodo((allTodos) => allTodos.filter((data, i) => i !== index));
//  }

//  function editTodo(index, newText) {
//   setTodo((allTodos) =>
//       allTodos.map((todo, i) => (i === index ? newText : todo))
//   );
// }

//   return (
//     <>
//       <h3>List of all To-Dos : </h3>
//       <div>
//         <ol>
//           {todo.map((data, index) => 
//             <li key={Math.random()}> {data}         
//               <div className="listDiv">
//               <div> <button className="btn2" onClick={() => removeTodo(index)}> Remove </button> </div>
//               <div> <button className="btn3" onClick={() => {
                //    const newText = prompt(
                //     "Enter new text:",
                //     data
                // );
                // if (newText) {
                //     editTodo(index, newText);
                // }
//               }} > Edit </button> </div>
//               </div>
              
//             </li>
//             )}
//         </ol>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";

export default function Todo(props) {  

  const [ todo, setTodo ] = useState([])
  // console.log("todo", todo);  

  useEffect(() => {
    if(props.t !== "" ) {
      setTodo((allTodos) => [...allTodos, props.t]);
    }
  },[props.t])

  function removeTodo(index) { // function to remove to-do elements
    console.log("index", index);
    setTodo((allTodos) => allTodos.filter((data, i) => i !== index));
   }
  
   function editTodo(index, newText) { // function to edit to-do elements
    setTodo((allTodos) =>
        allTodos.map((todo, i) => (i === index ? newText : todo))
    );
  }


  function checkTodo(data, index) { // function to check and make sure a new text has been entered, then only call edit function
    const newText = prompt(
      "Enter new text:",
      data
  );
  if (newText) {
      editTodo(index, newText);
  }
  }

  return (
    <>
      <h3>List of all To-Dos : </h3>
      <div>
        <ol>
          {todo.map((data, index) => 
            <li key={Math.random()}> {data}         
              <div className="listDiv">
              <div> <button className="btn2" onClick={() => removeTodo(index)}> Remove </button> </div>
              <div> <button className="btn3" onClick={() => {checkTodo(data, index)}} > Edit </button> </div>
              </div>
            </li>
            )}
        </ol>
      </div>
    </>
  );
}

