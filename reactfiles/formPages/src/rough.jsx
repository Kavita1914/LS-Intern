import React, { useState } from "react";
import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import Comp2 from "./Comp2";
import Comp4 from "./Comp4";
import Button from "./Button";
function MainComp() {
  const [data, setData] = useState(0);
  const [btnName, setBtnName] = useState([
    { Name: ["Next"] },
    { Name: ["Prev", "Next"] },
    { Name: ["Prev", "Next"] },
    { Name: ["Prev", "Submit"] },
  ]);
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "400px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <h1>
          Sign <span style={{ color: "#95079D" }}>Up</span>
        </h1>
        <h1></h1>
        <div>
          {data === 0 && <Comp1 />}
          {data === 1 && <Comp2 />}
          {data === 2 && <Comp3 />}
          {data === 3 && <Comp4 />}
        </div>

        <div style={{ margin: "75px", display: "flex" }}>

          {btnName.map((e, ind) => {
            return (
              ind === data &&
              e.Name.map((curr) => {
                console.log(curr);
                return (
                  <>
                    {curr === "Next" && (
                      <button style={{ backgroundColor: "Green" }}>
                        {curr}
                      </button>
                    )}
                    {curr === "Prev" && (
                      <button style={{ backgroundColor: "red" }}>{curr}</button>
                    )}
                    {curr === "Submit" && (
                      <button style={{ backgroundColor: "" }}>{curr}</button>
                    )}
                  </>
                );
              })
            );
          })}
        </div>


      </div>
    </>
  );
}
export default MainComp;

