import UnauthenticatedHome from "./unauthenticatedHome"
import Authenticated from "./authenticatedHome"


export default function Login({currentUser, setCurrentUser, authChecked, setAuthChecked, logOut}){


  
  return(
    <div>
      {authChecked ?(
        <Authenticated 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          logOut={logOut}
        />
        ):(
        <UnauthenticatedHome
        setAuthChecked={setAuthChecked}
        />
        )
      }
    </div>
  );
};