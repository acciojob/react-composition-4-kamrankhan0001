
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
const[name, setName]=useState("");
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");

function handleClick(){
setName(name,email,password)
}

  return (
    <div>
      <form onSubmit={handleClick}>
      <div>
        <label>Name</label>
        <input type="text"/>
        </div>

        <div>
        <label>Email</label>
        <input type="email"/>
        </div>
        
        <div>
        <label>Password</label>
        <input type="password"/>
        </div>
        </form>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App
