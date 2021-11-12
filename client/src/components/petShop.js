import { useState, useEffect } from 'react';
import PetShopContainer from "./petShopContainer";

export default function PetShop({ currentUser }){


  const [ shopArr, setShopArr ] = useState([])

  console.log(shopArr)
  useEffect(()=>{
    fetch(`/pets_shop/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(data=>{setShopArr(data)})
  }, [currentUser])
  
  return (
    <div>
      <h1>PetShop</h1>
      <PetShopContainer 
        shopArr={shopArr}
        currentUser={currentUser}
      />
    </div>
  )
}