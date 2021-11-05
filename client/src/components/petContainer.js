import PetCard from "./petCard"

export default function PetContainer({ usersPetsArr }){


  return (
    <div>
      <h1>PetContainer</h1>
      {!!usersPetsArr[0] ? 
      <div className="pet-container"> {
        usersPetsArr.map(petInfo =>{
          return (
            <PetCard petInfo={petInfo}/>
          )
        }
        )
      }</div>
      :
        <h1>LOOKING FOR PETS...</h1>
      }
    </div>
  )
}