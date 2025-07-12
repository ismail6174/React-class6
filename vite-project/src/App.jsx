import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import Login from "./Components/Form/login.jsx"
import Tables from './Components/Table/Tables.jsx';

const App= () => {

// onChange ((e)=>callBack of useState(e.target.value){
// })


// using multiple state:
// let [name,setName] = useState("")
// let [email,setEmail] = useState("")
// let [pass,setPass] = useState("")
// let [city,setCity] = useState("")

// const Handle = ()=>{
//   console.log(name,email,pass,city);
  
// }

// using single state:
let [combine,setCombine] = useState({
  name:"",
  pass:"",
  email:"",
  city:""

})

const Handle = ()=>{
  console.log(combine);
  
}

// saving object into array we use 1 state more using spread:

let [record,setRecord] = useState([])

setRecord([...record,combine])
// console.log(record)



  return (
    <>
     
     <h1>Form Using ONChange </h1>
     <br />

{/* using multiple state */}
{/* 
     <Login value={(e)=>{setName(e.target.value)}} label="Enter Name"  />
     <Login value={(e)=>{setEmail(e.target.value)}} label="Enter Email"  />
     <Login value={(e)=>{setPass(e.target.value)}} label="Enter Pass"  />
     <Login value={(e)=>{setCity(e.target.value)}} label="Enter City"  /> */}

{/* using single state */}

     <Login value={(e)=>{setCombine({...combine,name:e.target.value})}} label="Enter Name"  />
     <Login value={(e)=>{setCombine({...combine,pass:e.target.value})}} label="Enter Email"  />
     <Login value={(e)=>{setCombine({...combine,email:e.target.value})}} label="Enter Pass"  />
     <Login value={(e)=>{setCombine({...combine,city:e.target.value})}} label="Enter City"  />

      <button onClick={Handle}>Submit</button>

  <Tables recorddata={record}/>


    </>
  )
}

export default App
