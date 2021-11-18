import { useState } from "react";

export default function NewUser({ setShowSignup }){

  const [ newUsername, setNewUsername ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')

  const newUser ={
      "username" : newUsername,
      "password" : newPassword
  }
  console.log(newUser)

  function createUser(e){
    e.preventDefault()
   fetch('/signup',{
     method: 'POST',
     headers:{
       "Content-Type": "application/json"
     },
     body: JSON.stringify(newUser)
   })
   .then(resp => console.log(resp))
   .then(data => console.log(data))
  }

  return(
    <div className="login-div">
      <h2 id="login-title">Signup</h2>
      <form className="login-form" onSubmit={createUser}>
        <input type='text' onChange={(e)=>setNewUsername(e.target.value)} className="login-form-input" placeholder="Username"></input>
        <input type='text' onChange={(e)=>setNewPassword(e.target.value)} className="login-form-input" placeholder="Password"></input>
        <button type='submit' className="sign-form-input-button">Create Account</button>
        <div className="login-signup">
          <p>Already own Widdles?</p>
          <button id="log-page-btn"onClick={()=>setShowSignup(false)}>Login</button>
          </div>
      </form>
    </div>
  )
}