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
      <div className="header-home">
        <h1 className="my-widdles-logo">My Widdles</h1>
        {/* <p>Virtual Pets</p> */}        
        <div className="hearts2-home">
        <img className="monster-1" src="https://www.pngkit.com/png/full/196-1969052_space-invaders-extreme-black-and-white-pixel.png"></img>
          <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <img className="monster-2" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
          <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <img className="monster-3" src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9227.png"></img>
          <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <img className="monster-1" src="https://www.pngkit.com/png/full/196-1969052_space-invaders-extreme-black-and-white-pixel.png"></img>
          <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
        </div>
        <div className="hearts1-home">
          <img className="monster-1" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
          <img className="heart-1" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <img className="monster-2" src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9227.png"></img>
          <img className="heart-1" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <img className="monster-3" src="https://www.pngkit.com/png/full/196-1969052_space-invaders-extreme-black-and-white-pixel.png"></img>
          <img className="heart-1" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <img className="monster-1" src="https://freepngimg.com/thumb/space_invaders/32279-3-space-invaders-clipart.png"></img>
          <img className="heart-1" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
        </div>
      </div>
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