import AuthenticatedHome from "./authenticatedHome";
import UnauthenticatedHome from "./unauthenticatedHome";
import CreatePage from "./createPage";
import PetShop from "./petShop";
import PetPage from "./petPage";

import { Link, Switch, Route } from 'react-router-dom';

export default function NavBar(){


  return (
    <div>
      <h1>NavBar</h1>
      <Link to='/'><button>Login</button></Link>
      <Link to='/home'><button>Logged in</button></Link>
      <Link to='/create'><button>Create</button></Link>
      <Link to='/pet_shop'><button>Shop</button></Link>
      <Link to='/pet_page'><button>my_pets</button></Link>
      <Switch>
        <Route exact path="/"><UnauthenticatedHome /></Route>
        <Route exact path="/home"><AuthenticatedHome /></Route>
        <Route exact path="/create"><CreatePage /></Route>
        <Route exact path="/pet_shop"><PetShop /></Route>
        <Route exact path="/pet_page"><PetPage /></Route>
    </Switch>
    </div>
  )
}