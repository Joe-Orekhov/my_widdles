import CreatePage from "./createPage";
import PetPage from "./petPage";
import PetShop from "./petShop";
import Chat from "./chat"
import NavBar from "./navBar";

export default function AuthenticatedHome({ setCurrentUser, currentUser, logOut }){

console.log(currentUser)

  return(
    <div>
      <NavBar 
      currentUser={currentUser} 
      setCurrentUser={setCurrentUser}
      logOut={logOut}
      // authChecked={authChecked} 
      // setAuthChecked={setAuthChecked} 
      />
    </div>
  )
}