import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()

  return (
    <div className='flex py-2 px-5 bg-cyan-800 gap-5'>
          <button
       className='bg-amber-400 px-5 py-2 cursor-pointer  active:scale-95 '
       onClick={
        ()=>{
          navigate('/')
        }
       }
       >
        Return to home page</button>
      <button
       className='bg-amber-400 px-5 py-2 cursor-pointer active:scale-95 '
       onClick={
        ()=>{
          navigate(-1)
        }
       }
       >
        Back</button>
      <button
       className='bg-amber-400 px-5 py-2 cursor-pointer active:scale-95 '
       onClick={
        ()=>{
          navigate(+1)
        }
       }
       >
        Next</button>
    </div>
  )
}

export default Navbar2