import React, { useState } from 'react'

const usestate = () => {
  const [num, setNum] = useState('aman')
 
   const [username, setUsername] = useState('Nikhil')
 
   function changeNum (){
     setNum(30)
     setUsername('jay')
   }
 
   return (
     <div>
       <h1>Hello World the value is {num} <br /> the users name is {username}</h1>
       <button onClick={changeNum} >click here</button>
       </div>
   )
 }      


export default usestate