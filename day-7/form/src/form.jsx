import React from 'react'

const form = () => {
  function submitHandler(e){
    e.preventDefault()
    console.log("form submited");
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" placeholder='enter your name'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default form