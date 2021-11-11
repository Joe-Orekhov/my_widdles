import { useState, useEffect } from 'react';

import PetImage from "./petImage"

export default function petShopCard({ pet, currentUser }){

  let petsInfo = {
    "creator_id" : pet.creator_id,
    "pet_id" : pet.id,
    "price" : pet.price
}
  console.log(pet.price)

  function handleSubmit(){
    

    fetch('/create_chat', {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(petsInfo)
    })
    .then(resp => resp.json())
    .then(data=> console.log(data))
  }
console.log(pet.image.split(''))

  return (
    <div className='pet-shop-card'>
      <h1>{pet.name}</h1>
       <p>{`$ ${pet.price}`}</p>
        <div className='pet-image'>
          {
            pet.image.split('').map(pix =>{
              return(
                <PetImage pix={pix} />
              )})
          }
        </div> <br/>
      <button onClick={()=> handleSubmit()}>Contact creator</button>
    </div>
  )
}