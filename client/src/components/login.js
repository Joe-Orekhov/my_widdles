import UnauthenticatedHome from "./unauthenticatedHome"
import Authenticated from "./authenticatedHome"



export default function Login({currentUser, setCurrentUser, authChecked, setAuthChecked}){

  // const [ currentUser, setCurrentUser ] = useState({});
  // const [ authChecked, setAuthChecked ] = useState(false);

  // useEffect(()=>{
  //   fetch('/me', { 
  //     credentials: 'include'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     debugger
  //   })
  // },[])


  // if(!authChecked){
  //   return (<div> </div>)
  // }
  
  return(
    <div>
      {authChecked ?(
        <Authenticated 
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
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