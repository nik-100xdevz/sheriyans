import React from 'react'
import Box from './box';

const App = () => {

  function btnClicked() {
    console.log('button is clicked');
    
  }
  function inputChanging(val){
    console.log(val);
    
  }

  function pageScrolling(params) {
    // console.log(params);
    console.log("scrolling at spped of", params);
    
    
  }

  return (
    <div>
     
     {/* <input onChange={(elem)=>{
      inputChanging(elem.target.value);
      
     }} className=' bg-gray-500 p-2 m-[10px] p-[10px, 20px]' type="text" placeholder='Enter name'/>
      <button className=' bg-blue-500 m-xl text-white p-2 rounded' onClick={btnClicked}>
        Chnage User
      </button> */}
      {/* <div
        onMouseMove={(elem)=>{
            console.log(elem.clientY);
            
        }} 
        className="h-96 w-2xl bg-red-500 rounded-lg" >
            this is box
        </div> */}
        <div onWheel={(params)=>{pageScrolling(params.deltaY)}}>
        <div className='h-screen w-full bg-red-500'></div>
        <div className='h-screen w-full bg-pink-500' ></div>
        <div className='h-screen w-full bg-blue-500'></div>
        </div>
    </div>
  )
}

export default App