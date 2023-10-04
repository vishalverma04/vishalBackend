import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const [employee,setEmployee]=useState([]);
useEffect(()=>{

// ########### use axios to connect/get data from backend

  axios.get('/api/employee')
  .then((response)=>{
   setEmployee(response.data)
  })
  .catch((error)=>{
    console.log("error is found",error)
  })


// ########    use fetch to connect/get data from backend

//   fetch('/api/employee')
//   .then((response)=>{
//     return response.json()
//   })
//   .then((data)=>{
// //  console.log(data)
//  setEmployee(data)
//   })
//   .catch((error)=>{
//     console.log("error is found",error)
//   })



})


 return (
    <>
      <h1>Hii Vishal Verma???</h1>
      <h1>Backend</h1>
      <p>Employee:{employee.length}</p>
      
   {
   employee.map((e)=>(
    <div key={e.id}>
    <p>{e.id}</p>
      <p>{e.name}</p>
      <p>{e.location}</p>
      <br></br>
      <br></br>
      <br></br>

    </div>
   ))

   }

    </>
  )
}

export default App
