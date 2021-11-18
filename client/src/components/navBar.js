import Login from "./login";
import CreatePage from "./createPage";
import PetShop from "./petShop";
import PetPage from "./petPage";
import Messages from "./chat";

import { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default function NavBar({currentUser, setCurrentUser, authChecked, setAuthChecked, logOut }){

  const [ rerender, setReneder] = useState(false)
  const [ usersPetsArr, setUsersPetsArr ] = useState([])

  const [ home, setHome ] = useState("nav-bar-button")
  const [ create, setCreate ] = useState("nav-bar-button")
  const [ shop, setShop ] = useState("nav-bar-button")
  const [ chat, setChat ] = useState("nav-bar-button")


  useEffect(()=>{
    fetch(`/users_pets/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(data=>{ 
      setUsersPetsArr(data)
    })
  },[currentUser, authChecked, rerender])

  function test(e){

    if(e.target.name === 'home'){
      setHome("nav-bar-button-current-tab")
      setCreate("nav-bar-button")
      setShop("nav-bar-button")
      setChat("nav-bar-button")
    }else if(e.target.name === 'create'){
      setHome("nav-bar-button")
      setCreate("nav-bar-button-current-tab")
      setShop("nav-bar-button")
      setChat("nav-bar-button")
    }else if(e.target.name === 'shop'){
      setHome("nav-bar-button")
      setCreate("nav-bar-button")
      setShop("nav-bar-button-current-tab")
      setChat("nav-bar-button")
    }else{
      // CHAT
      setHome("nav-bar-button")
      setCreate("nav-bar-button")
      setShop("nav-bar-button")
      setChat("nav-bar-button-current-tab")
    }
    
  }

  return (
    <div>
      <div className="nav-bar">

        <div className="logo-nav">
          <img className="heart-logo" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
          <p className="my-widdles-logo-nav">{'My Widdles'}</p>
        </div>
        <div className="nav-bar-btn-home">
          <Link to='/pet_page'><button name='home' onClick={(e)=>test(e)} className={home}>Home</button></Link>
          <Link to='/create'><button name='create' onClick={(e)=>test(e)} className={create}>Create</button></Link>
          <Link to='/pet_shop'><button name='shop' onClick={(e)=>test(e)} className={shop}>Shop</button></Link>
          <Link to='/messages'><button name='messages' onClick={(e)=>test(e)} className={chat}>&#128172;</button></Link>
        </div>

        <div className="nav-bar-user-section">
          <p className="nav-bar-user-money">You currently have ${currentUser.money}!!</p>
          <p className="nav-bar-username">Account: {currentUser.username}</p>
          <button type="button" onClick={()=>logOut()} className='nav-bar-button exit'>EXIT</button>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Login 
               currentUser={currentUser} 
               setCurrentUser={setCurrentUser}
               authChecked={authChecked} 
               setAuthChecked={setAuthChecked} 
          />
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>

        <Route exact path="/pet_shop">
          <PetShop 
            currentUser={currentUser}
          />
        </Route>

        <Route exact path="/pet_page">
          <PetPage currentUser={currentUser} usersPetsArr={usersPetsArr}/>
        </Route>
        <Route exact path="/messages">
          <Messages currentUser={currentUser} setReneder={setReneder} rerender={rerender}/>
        </Route>
    </Switch>
    </div>
  )
}