import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:"raj",age:21})


  const btnClicked=() => {
    const newNum = {...num}
    newNum.user="Nikhil"
    setNum(newNum)
  }

  return (
    <div>
      <h1>The num is {num} <br /> and user is {num.user} <br /> and {num.age} </h1>
      <button onClick={btnClicked} >Click</button>

    </div>
  )
}

export default App