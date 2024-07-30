import React from "react";
export default function BtnCount (props) {
    console.log("props", props);
    return <h1>{props.countNum}</h1>
}