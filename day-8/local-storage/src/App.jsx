import React from 'react'

// localStorage.setItem('age',20)

// const user =localStorage.getItem('user','age')
// const age =localStorage.getItem('age')

// console.log(user);
// console.log(age);

// localStorage.removeItem('age')

// const user ={
//   username: "Nikhil",
//   age:20,
//   city:"mumbai"
// }

// localStorage.setItem("user",JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'));

console.log(user);



const App = () => {
  return (
    <div>App</div>
  )
}

export default App