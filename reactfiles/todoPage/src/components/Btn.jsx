
export default function Btn(props) {
 console.log("props",props);
   return (
    <>
    <h3>List of all To-Dos : </h3>
    <ol>
      {props.t.map((data) => 
      <li key={Math.random()}>{data}<button className="btn2">Remove</button></li>)
      }
    </ol>
    </>
   )
}