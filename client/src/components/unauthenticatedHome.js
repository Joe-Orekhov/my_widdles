import {useEffect, useState } from 'react'
import NewUser from './newUser'
import { useHistory, withRouter } from 'react-router-dom'

function UnauthenticatedHome({ setAuthChecked }){
  let his = useHistory()
  const [ passwordInput, setPasswordInput] = useState('')
  const [ usernameInput, setUsernameInput] = useState('')
  const [ showSignup, setShowSignup] = useState(false)
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
   his.push('/pet_page')
 }

  return(
    <div>
      {showSignup?(
        <div>
          <NewUser setShowSignup={setShowSignup} />
        </div>
      ):(
        <div className="login-div">
          <h2 id="login-title">Login</h2>
          <form className="login-form" onSubmit={(e) => sendRequest(e, userInput)}>
            <input type='text' name='username' onChange={(e)=> setUsernameInput(e.target.value)} className="login-form-input" placeholder="Username"></input>
            <input type='password' name='password' onChange={(e)=> setPasswordInput(e.target.value)} className="login-form-input" placeholder="Password"></input>
            <button className="login-form-input-button" type='submit'>Login</button>
          <div className="login-signup">
          <p>NEW? Sign up here!</p>
          <button id="sign-page-btn"onClick={()=>setShowSignup(true)}>Sign Up</button>
          </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default withRouter(UnauthenticatedHome)