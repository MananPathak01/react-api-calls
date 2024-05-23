import { useEffect, useState } from 'react'
// import './App.css'
import Axios from 'axios'
function App() {
  const [name, setName] = useState("")
  const [data, setData] = useState(null)
  // fetch("https://catfact.ninja/fact")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data);});

  
  const submitName = ()=> {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>
      setData(res.data)
    )
  }
  useEffect(()=>{
    submitName()
  },[])

  return (
    <>
      <div>
        <h2>Enter your name and we will predict your age: </h2>
        <input onChange={(event)=>setName(event.target.value)}/>
        <div>{name}</div>
        <button onClick ={submitName}>Submit</button>
        {data?.age!==null ? <h1>Predicted Age : {data?.age}</h1> : ""}
        <h2>Count: {data?.count}</h2>
      </div>

    </>
  )
}

export default App
