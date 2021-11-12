import { useState } from "react";

export default function NewUser(){

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
    <div>
      <form onSubmit={createUser}>
        <input type='text' onChange={(e)=>setNewUsername(e.target.value)}></input>
        <input type='text' onChange={(e)=>setNewPassword(e.target.value)}></input>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}