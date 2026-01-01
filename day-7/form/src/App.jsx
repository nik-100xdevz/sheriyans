import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  function submitHandler(e){
    e.preventDefault()
    console.log("form submitted by", title);
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text"
        placeholder='enter your name'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App