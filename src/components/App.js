
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [user, setUser] = useState({name: "", email: "", password: ""})

console.log("user", user)

function validateForm(event){
event.preventDefault()
}

  return (
    <div>
      <form onSubmit={validateForm}>
      <div>
        <label>Name</label>
        <input type="text"
        onChange={(event)=>setUser({...user, name: event.target.value})}/>
        </div>

        <div>
        <label>Email</label>
        <input type="email"
        onChange={(event)=>setUser({...user, email: event.target.value})}
        />
        </div>
        
        <div>
        <label>Password</label>
        <input type="password"
        onChange={(event)=>setUser({...user, password: event.target.value})}
        />
        </div>

        <button>Submit</button>
        </form>
        
    </div>
  )
}

export default App
