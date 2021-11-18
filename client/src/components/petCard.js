import PetImage from "./petImage";
// import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export default function PetCard({ petInfo, ranNum }){
  

  const [ love, setLove ] = useState(petInfo.love)
  const heartArr = [...Array(love)].map((i) => <img className="pets-heart" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png" key={i} ></img>)

  const image_array = petInfo.image.split('')

  function sendLove(){
    console.log("hello")
    fetch(`/pets_love/${petInfo.id}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }


  return (
    <div className='pet-shop-card'>
      <h1>{petInfo.name}</h1>
      <div className='pet-image'>
      {image_array.map((pix)=>{
        return (
          <PetImage pix={pix}/>
        )
      })}
      </div>
      <div className="pet-heart-home">
        {heartArr}
      </div>
      <button className="love-pet-button" onClick={()=>sendLove()}>LOVE</button>
    </div>
  )
}