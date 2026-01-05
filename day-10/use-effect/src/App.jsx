import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(function () {
    console.log("use effect is running");
  }, [num2]);

  // Mounting

  //  useEffect(function random(){
  //     // const a = Math.random()
  //     console.log('useEffect is running');

  //   })

  return (
    <div>
      <h1>the value of num1 is {num}</h1>
      <h1>the value of num2 is {num2}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
          
        }}

        onDoubleClick={
          ()=>{
            setNum2(num2 + 10);
          }
        }

      >
        Click
      </button>
    </div>
  );
};

export default App;
