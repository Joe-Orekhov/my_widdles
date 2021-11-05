import CreatePage from "./createPage";
import PetPage from "./petPage";
import PetShop from "./petShop";
import Chat from "./chat"

export default function AuthenticatedHome({ setCurrentUser, currentUser }){

console.log(currentUser)

  return(
    <div>
      <h1>LOGGED IN</h1>
      <CreatePage />
      <PetPage />
      <PetShop />
      <Chat />
    </div>
  )
}