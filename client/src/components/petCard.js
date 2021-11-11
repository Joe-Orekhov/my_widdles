import PetImage from "./petImage";

export default function PetCard({ petInfo }){

  console.log(petInfo.image.split(''));
  const image_array = petInfo.image.split('')
  return (
    <div className="pet-card">
      <h1>{petInfo.name}</h1>
      <div className="pet-image">
      {image_array.map((pix)=>{
        return (
          <PetImage pix={pix}/>
        )
      })}
      </div>
      <h1>{petInfo.love}</h1>
      <button>LOVE</button>
    </div>
  )
}