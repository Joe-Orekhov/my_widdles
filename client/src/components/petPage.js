import PetContainer from "./petContainer";
import { useState, useEffect } from 'react';

export default function PetPage({currentUser, usersPetsArr}){

  // const [ usersPetsArr, setUsersPetsArr ] = useState([])

  // useEffect(()=>{
  //   fetch(`/users_pets/${currentUser.id}/`)
  //   .then(resp=> resp.json())
  //   .then(data=>{ 
  //     setUsersPetsArr(data)
      
  //   })
  // },[currentUser])

  return (
    <div className="pet">
        <div id="create-page-background">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/100603690261147207/24EEC49836089DAA332B19BCBD972CA4DFE4F7F7/" className="create-image" alt="" />
        </div>
      <PetContainer usersPetsArr={usersPetsArr}/>
    </div>
  )
}