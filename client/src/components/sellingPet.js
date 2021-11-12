import { useState, useEffect } from "react";

export default function SellingPet({ chatRoom, buyer}){

  const [ price, setPrice ] = useState(0)

  const priceSend = {
    'price' : parseInt(price)
  }

  console.log(priceSend)
  function updatePrice(e){
    e.preventDefault()
    fetch(`/update_price/${chatRoom.pet_id}`,{
      method : 'PATCH',
      headers:{ 
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(priceSend)
    })
  }
 

  return(
    <div>
      <form onSubmit={updatePrice}>
        <input 
          type="range" 
          min="0" max="2000" 
          name="price" 
          onChange={(e)=>{setPrice(e.target.value);}}
          />
        <button type="submit">{`Set price to ${price}`}</button>
      </form>
    </div>
  )
}