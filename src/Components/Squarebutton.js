import React from "react";
import { useState } from "react";

function Squarebutton(props) {
  return (
    <div>
      <div onClick={props.onClick} className=" py-10 px-10 border border-black">
        {props.value}
      </div>
    </div>
  );
}
export default Squarebutton;
