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
    <div>
      <h1>PetPage</h1>
      <PetContainer usersPetsArr={usersPetsArr}/>
    </div>
  )
}