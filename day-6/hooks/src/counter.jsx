import React, { useState } from 'react'

const counter = () => {
   const [num, setNum] = useState(2)
 
   return (
     <div>
       <h1>{num}</h1>
       <button onClick={()=>{setNum(num+1)}}>increase</button>
       <button onClick={()=>{setNum(num-1)}} >decrease</button>
       </div>
   )
 }

export default counter