import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  // axios

  const getData = async () => {
  //  const {data} = await axios.get('https://developerapis.vercel.app/api/users')

  //  console.log(data);

  const response = await axios.get('https://picsum.photos/v2/list')

 setData(response.data);
  
  }


  //fettch
  // const getData = async ()=>{
  //   const response = await fetch('https://developerapis.vercel.app/api/users')
    
  //   const data = await response.json()
  //   console.log(data);
    
  // }

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  return (
    <div>
      <button onClick={getData} >Get-data</button>
      <div>
        {data.map(function(elem,idx){
          
          return (

            <img  src={elem.download_url}  width="200"  />
          )
        })}
      </div>
    </div>
  )
}

export default App