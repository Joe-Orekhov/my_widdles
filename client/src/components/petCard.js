import PetImage from "./petImage";

export default function PetCard({ petInfo, ranNum }){

  const image_array = petInfo.image.split('')
  return (
    <div className="pet-card">
      <h1>{petInfo.name}</h1>
      <div className={`pet-image-${ranNum}`}>
      {image_array.map((pix)=>{
        return (
          <PetImage pix={pix}/>
        )
      })}
      </div>
      
      <button>LOVE</button>
    </div>
  )
}