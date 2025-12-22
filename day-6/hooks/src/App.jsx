import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [users, setUsers] = useState("Nikhil")
  const [arr, setArr] = useState([10,20,30])


  function changeNum() {
    setNum(num+1)
    console.log(num);
    setUsers("Nikhil rai")
    setArr([0,20])
  }

  return (
    <div>
      <h1>The num is {num} <br /> and user is {users} <br /> and {arr} </h1>
      <button onClick={changeNum} >Click</button>

    </div>
  )
}

export default App