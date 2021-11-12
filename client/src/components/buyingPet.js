import { useHistory } from 'react-router-dom'

export default function BuyingPet({chatRoom}){

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
    .then(data => console.log(data))
    // useHistory.push('/pet_page')
  }
  console.log(chatRoom.pet_name)
  return(
    <div>
         <button onClick={(e)=>buyPet(e)}>{`Buy "${chatRoom.pet_name}" for ${chatRoom.price} `}</button>
    </div>
  )
}