import {useEffect, useState } from 'react'
import NewUser from './newUser'

export default function UnauthenticatedHome({ currentUser, setCurrentUser, authChecked, setAuthChecked }){

  const [ passwordInput, setPasswordInput] = useState('')
  const [ usernameInput, setUsernameInput] = useState('')

  const userInput = {

      "username": usernameInput,
      "password": passwordInput
  
  }

 function sendRequest(e, userInput){
   e.preventDefault()
   fetch('/login',{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(userInput)
   })
   .then(resp => setAuthChecked(resp.ok))
 }




  return(
    <div>
      <form onSubmit={(e) => sendRequest(e, userInput)}>
        <input type='text' name='username' onChange={(e)=> setUsernameInput(e.target.value)}></input>
        <input type='text' name='password' onChange={(e)=> setPasswordInput(e.target.value)}></input>
        <button type='submit'>Login</button>
      </form>
      <NewUser />
    </div>
  )
}