
export default function PetCard({ petInfo }){

  console.log(petInfo);
  return (
    <div className="pet-card">
      <h1>{petInfo.name}</h1>
      <h1>{petInfo.image}</h1>
      <h1>{petInfo.love}</h1>
      <button>LOVE</button>
    </div>
  )
}