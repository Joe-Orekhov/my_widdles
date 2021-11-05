import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/login";
import NavBar from "./components/navBar";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
		console.log("HI")
    fetch("/me", {
      credentials: "same-origin",
			// headers: {
				"Content-Type" : "application/json",
			// 	"Accept" : "application/json"
			// }
    })
      // .then((res) => res.json())
      // .then((data) => {
      //   debugger
      // })
			.then(res=> {
				if(res.ok){
					res.json().then(data=>{
						console.log(data)
					})
				}
			})
			.catch((err) => console.log(err))
  }, []);



  return (
    <div>
      hello?
      <NavBar />
      {/* <Login
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        authChecked={authChecked}
        setAuthChecked={setAuthChecked}
      /> */}
    </div>
  );
}

export default App;
