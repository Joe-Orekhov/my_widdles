import Pixel from "./pixel";
import { useState } from "react";

export default function PetPixleDrawinge(){

  const [ name, setName ] = useState('')
  const [ price, setPrice] = useState(50)
  const [ blackBoxs, setBlackBoxs] =useState([])

  let boxOBJ = [
    "1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J",
    "2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J",
    "3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J",
    "4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J",
    "5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J",
    "6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J",
    "7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J",
    "8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J",
    "9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J",
    "10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H", "10I", "10J"
  ];

    const newPet = {
      "name" : name,
      "price" : price,
      "image" : `${blackBoxs}`
    }

  function handleSubmit(e){
    e.preventDefault();

    fetch('/create_pet',{
      method: 'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPet)
    })
    .then(resp => resp.json())
    .then(data=> console.log(data))
    let boxOBJ = [
      "1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J",
      "2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J",
      "3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J",
      "4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J",
      "5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J",
      "6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J",
      "7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J",
      "8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J",
      "9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J",
      "10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H", "10I", "10J"
    ];
    e.target.reset()
  }


  return (
    <div className="new-pet-form">
        <form id="pet-form-home" onSubmit={(e)=> handleSubmit(e)}>
          <input type="text" className='pet-form-name' name="name" placeHolder="Pet Name..." maxlength="10" onChange={(e)=> setName(e.target.value)} ></input>
            <div id="pixel-display">
              { boxOBJ.map((pix)=>{
                return(
                  <Pixel pix={pix} blackBoxs={blackBoxs}/>
                )
              })}
            </div>
            <input type='range' min="0" max="1000" id='pet-form-price' className="form-price" name="price" onChange={(e)=> setPrice(e.target.value)} ></input>
          <button type='submit' id="sell-pet-button">{`Sell for $${price}`}</button>
        </form>
      </div>
    
  )
}