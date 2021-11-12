import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/login";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [authChecked, setAuthChecked] = useState(false);

  console.log(authChecked)
  useEffect(() => {
    fetch("/me", {
      credentials: "same-origin",
    })
			.then(res=> {
				if(res.ok){
					res.json().then(data=>{
						setCurrentUser(data)
					})
				}
			})
			.catch((err) => console.log(err))
    }, [authChecked]);

  function logOut(){
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(resp => resp.json())
    .then(data => setAuthChecked(data))
  }

  return (
    <div>
      <Login
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        authChecked={authChecked}
        setAuthChecked={setAuthChecked}
        logOut={logOut}
      />
    </div>
  );
}

export default App;
