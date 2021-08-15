import React, { useState } from "react";

const App=()=>{
  const [name,setName]=useState(null);
  const[fullName,setFullName]=useState()
  const inputEvent=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
  }
  const onSubmit=()=>{
    setFullName(name)
  }
  return(
    <>
    <h1>Hello {fullName} </h1>
    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}></input>
    <button onClick={onSubmit}>Click Me 👍</button>
    </>
  )
}
export default App;