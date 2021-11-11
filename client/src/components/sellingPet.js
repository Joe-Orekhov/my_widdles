import { useState, useEffect } from "react";

export default function SellingPet({ chatRoom, buyer}){

  const [ price, setPrice ] = useState(0)


  function updatePrice(e){
    e.preventDefault()
    console.log(price)
    // fetch(``,{
    //   method: 'POST',
    //   headers: { "Content_Type" : "application/json"},
    //   body: JSON.stringify(price)
    // })
  }
 

  return(
    <div>
      <form onSubmit={(e)=>{ updatePrice(e)}}>
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