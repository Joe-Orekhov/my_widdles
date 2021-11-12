

export default function BuyingPet({chatRoom}){

  const sellInfo = {
    "buyer_id" : chatRoom.buyer_id
  }

  function buyPet(e){
    e.preventDefault()
    console.log(chatRoom.price)
    fetch(`/sell_pet/${chatRoom.pet_id}`,{
      method: 'POST',
      headers: { "Content_Type" : "application/json"},
      body: JSON.stringify(sellInfo)
    })
  }
  console.log(chatRoom.pet_name)
  return(
    <div>
      <button onClick={(e)=>buyPet(e)}>{`Buy "${chatRoom.pet_name}" for ${chatRoom.price} `}</button>
    </div>
  )
}