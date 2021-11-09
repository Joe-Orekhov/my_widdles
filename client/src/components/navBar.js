import AuthenticatedHome from "./authenticatedHome";
import UnauthenticatedHome from "./unauthenticatedHome";
import CreatePage from "./createPage";
import PetShop from "./petShop";
import PetPage from "./petPage";
import Messages from "./chat";

import { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

export default function NavBar({currentUser, setCurrentUser, authChecked, setAuthChecked }){


  const [ usersPetsArr, setUsersPetsArr ] = useState([])
  // const [ shopArr, setShopArr ] = useState([])

  useEffect(()=>{
    fetch(`/users_pets/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(data=>{ 
      setUsersPetsArr(data)
      
    })
  },[currentUser])

// useEffect(()=>{
//   fetch(`/pets_shop/27`)
//   .then(resp=> resp.json())
//   .then(data=>{setShopArr(data)})
// }, [currentUser])



  return (
    <div>
      <h1>NavBar</h1>
      <p>{currentUser.username}</p>
      <Link to='/'><button>Login</button></Link>
      <Link to='/home'><button>Logged in</button></Link>
      <Link to='/create'><button>Create</button></Link>
      <Link to='/pet_shop'><button>Shop</button></Link>
      <Link to='/pet_page'><button>my_pets</button></Link>
      <Link to='/messages '> <button>messages</button></Link>
      <Switch>
        <Route exact path="/">
          <UnauthenticatedHome 
               currentUser={currentUser} 
               setCurrentUser={setCurrentUser}
               authChecked={authChecked} 
               setAuthChecked={setAuthChecked} 
          />
        </Route>

        <Route exact path="/home">
          <AuthenticatedHome currentUser={currentUser}/>
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
    </div>
  )
}