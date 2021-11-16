import PetImage from "./petImage";
import { useHistory } from 'react-router-dom'

export default function PetCard({ petInfo, ranNum }){
  const heartArr = [...Array(parseInt(petInfo.love))].map((i) => <img className="pets-heart" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png" key={i} ></img>)

 
  console.log(heartArr)
  console.log(parseInt(petInfo.love))
  const image_array = petInfo.image.split('')
  return (
    <div className="pet-card">
      <h1 className="pet-name" >{petInfo.name}</h1>
      <div className={`pet-image-${ranNum}`}>
      {image_array.map((pix)=>{
        return (
          <PetImage pix={pix}/>
        )
      })}
      </div>
      <div className="pet-heart-home">
        {heartArr}
      </div>
      <button>LOVE</button>
    </div>
  )
}