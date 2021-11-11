

export default function BuyingPet({chatRoom}){


  function buyPet(e){
    e.preventDefault()
    console.log(chatRoom.price)
    // fetch(``,{
    //   method: 'POST',
    //   headers: { "Content_Type" : "application/json"},
    //   body: JSON.stringify(chatRoom.buyer_id)
    // })
  }
  console.log(chatRoom.pet_name)
  return(
    <div>
      <button onClick={(e)=>buyPet(e)}>{`Buy "${chatRoom.pet_name}" for ${chatRoom.price} `}</button>
    </div>
  )
}