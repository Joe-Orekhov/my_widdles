import Login from "./login";
import CreatePage from "./createPage";
import PetShop from "./petShop";
import PetPage from "./petPage";
import Messages from "./chat";

import { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default function NavBar({currentUser, setCurrentUser, authChecked, setAuthChecked, logOut }){


  const [ usersPetsArr, setUsersPetsArr ] = useState([])

  useEffect(()=>{
    fetch(`/users_pets/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(data=>{ 
      setUsersPetsArr(data)
      
    })
  },[currentUser, authChecked])


  return (
    <div>
      <h1>NavBar</h1>
      <p>{currentUser.username}</p>
      <Link to='/pet_page'><button>my_pets</button></Link>
      <Link to='/create'><button>Create</button></Link>
      <Link to='/pet_shop'><button>Shop</button></Link>
      <Link to='/messages' > <button>messages</button></Link>
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
          <Messages currentUser={currentUser}/>
        </Route>
    </Switch>
    <button type="button" onClick={()=>logOut()}>logout</button>
    </div>
  )
}