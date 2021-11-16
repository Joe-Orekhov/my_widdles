import React from 'react';


export default function BuyingPet({ chatRoom, setReneder, rerender }){
  
  const sellInfo = {
    "buyer_id" : chatRoom.buyer_id
  }
  
  function buyPet(e){
    e.preventDefault()
    fetch(`/sell_pet/${chatRoom.pet_id}`,{
      method: 'PATCH',
      headers: { "Content_Type" : "application/json"},
      body: JSON.stringify(sellInfo)
    })
    .then(resp => resp.json())
    .then(data =>{
       console.log(data)
    })
    if(rerender){
      setReneder(false)
    }else{
      setReneder(true)
    }
  }

  return(
    <div>
         <button onClick={(e)=>buyPet(e)}>{`Buy "${chatRoom.pet_name}" for ${chatRoom.price} `}</button>
    </div>
  )
}