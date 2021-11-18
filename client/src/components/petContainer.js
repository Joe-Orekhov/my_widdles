import PetCard from "./petCard"

export default function PetContainer({ usersPetsArr }){

  
  return (
    <div>
      <h1>PetContainer</h1>
      {!!usersPetsArr[0] ? 
      <div className="pet-container"> {
        usersPetsArr.map(petInfo =>{
          let ranNum = 1
          // Math.floor(Math.random() * 5)
          return (
            <PetCard petInfo={petInfo} ranNum={ranNum}/>
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