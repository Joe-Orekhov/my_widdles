import React from 'react';
import { useHistory, withRouter } from "react-router-dom";

function BuyingPet({ chatRoom, setReneder, rerender }){
  const history = useHistory()
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
    history.push("/pet_page")
  }

  return(
    <div>
      <h3 className='chatroom-price' >{`$${chatRoom.price}`}</h3>
         <button className="sell-buy-pet" onClick={(e)=>buyPet(e)}>{`Buy ${chatRoom.pet_name} `}</button>
    </div>
  )
}
export default withRouter(BuyingPet)