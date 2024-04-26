import React from "react";
import { useState } from "react";
import Squarebutton from "./Squarebutton";
import Hello from "./Hello";

function Square() {
   const [state,setstate]=useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function clickHandler(index) {
        if (state=== true) {
          const newSquares = [...squares]; // Create a copy of the squares array

          newSquares[index] = "X"; // Update the value at the specified index
          if((newSquares[0]==="X"&&newSquares[1]==="X"&&newSquares[2]==="X")||(newSquares[3]==="X"&&newSquares[4]==="X"&&newSquares[5]==="X")||
          (newSquares[6]==="X"&&newSquares[7]==="X"&&newSquares[8]==="X")||(newSquares[0]==="X"&&newSquares[1]==="X"&&newSquares[2]==="X")||
          (newSquares[1]==="X"&&newSquares[4]==="X"&&newSquares[7]==="X")||(newSquares[2]==="X"&&newSquares[5]==="X"&&newSquares[7]==="X")||
          (newSquares[0]==="X"&&newSquares[4]==="X"&&newSquares[7]==="X")||(newSquares[2]==="X"&&newSquares[4]==="X"&&newSquares[6]==="X")){
          <Hello></Hello>
          }
          setSquares(newSquares); // Update the state with the new array
         setstate(false);
        } else if (state=== false) {
          const newSquares = [...squares]; // Create a copy of the squares array
          newSquares[index] = "0"; // Update the value at the specified index
          setSquares(newSquares); // Update the state with the new array
          setstate(true);
        }
      }
return <div className="min-h-[600px] max-h-[1200px]">
  <div className="flex flex-col items-center justify-center">
<div className="flex flex-row">
<Squarebutton onClick={()=>(clickHandler(0))} value={squares[0]}></Squarebutton>
<Squarebutton  onClick={()=>(clickHandler(1))} value={squares[1]}></Squarebutton>
<Squarebutton onClick={()=>(clickHandler(2))} value={squares[2]} ></Squarebutton>
</div>
<div className="flex flex-row">
<Squarebutton onClick={()=>(clickHandler(3))} value={squares[3]}></Squarebutton>
<Squarebutton onClick={()=>(clickHandler(4))} value={squares[4]}></Squarebutton>
<Squarebutton onClick={()=>(clickHandler(5))} value={squares[5]}></Squarebutton>
</div>
<div className="flex flex-row">
<Squarebutton onClick={()=>(clickHandler(6))} value={squares[6]}></Squarebutton>
<Squarebutton onClick={()=>(clickHandler(7))} value={squares[7]}></Squarebutton>
<Squarebutton onClick={()=>(clickHandler(8))} value={squares[8]}> </Squarebutton>
</div>
</div>
</div>

}
export default Square;
