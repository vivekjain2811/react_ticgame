import React from "react";
import { useState } from "react";
import Squarebutton from "./Squarebutton";


function Square() {

   const [state,setstate]=useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
   
    const checkwinner = () => {
        const winnerLogic = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        for (let i = 0; i < winnerLogic.length; i++) {
          const [a, b, c] = winnerLogic[i];
          if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]; // Return the winning value (X or O)
          }
        }
        return null; // Return null if no winner is found
      };
const isWinner=checkwinner();
    function clickHandler(index) {
        if (state=== true) {
          const newSquares = [...squares]; // Create a copy of the squares array

          newSquares[index] = "X"; // Update the value at the specified index
         
          setSquares(newSquares); // Update the state with the new array
         setstate(false);
        } else if (state=== false) {
          const newSquares = [...squares]; // Create a copy of the squares array
          newSquares[index] = "0"; // Update the value at the specified index
          setSquares(newSquares); // Update the state with the new array
          setstate(true);
        }
      }
return (
<div className="min-h-[600px] max-h-[1200px]">
    {isWinner?(< div className="text-4xl">{isWinner} wins khusiya banao abhi pura banaoga abhi bhi kuch cheeze rahe rhi hai
     kya batu lg raha tha khud banaoga lekin youtube se dekhna hi pada react hai hard lekin ho jaegi bhagwan ne chaha tho aur koi naya basic 
     project batao react me jldi ye tho 60 percent smj aaya.
     </div>):(
    <>
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
</div></>)}
</div>

)}
export default Square;
