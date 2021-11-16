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

  console.log(rerender)

  useEffect(()=>{
    fetch(`/users_pets/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(data=>{ 
      setUsersPetsArr(data)
      
    })
  },[currentUser, authChecked, rerender])


  return (
    <div>
      <div className="nav-bar">
        <div>
          <p>You currently have ${currentUser.money}!!</p>
          <p>{currentUser.username}</p>
        </div>
        <div className="nav-bar-btn-home">
          <Link to='/pet_page'><button className='nav-bar-button pet'>🏠</button></Link>
          <Link to='/create'><button className='nav-bar-button create'>🖍️</button></Link>
          <Link to='/pet_shop'><button className='nav-bar-button shop'>🛍️</button></Link>
          <Link to='/messages'><button className='nav-bar-button chat'>&#128172;</button></Link>
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