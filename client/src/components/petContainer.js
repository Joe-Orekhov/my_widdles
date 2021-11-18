import PetCard from "./petCard"

export default function PetContainer({ usersPetsArr }){

  
  return (
    <div>
      {!!usersPetsArr[0] ? 
      <div className="pet-shop-card-home"> {
        usersPetsArr.map(petInfo =>{
          let ranNum = 1
          // Math.floor(Math.random() * 5)
          return (
            <div className="pet-shop-container">
            <PetCard petInfo={petInfo} ranNum={ranNum}/>
            </div>
          )
        }
        )
      }</div>
      :
      <div>
      <h1 className="loading-stuff-title">Looking for Pets...</h1>
    <div className="pet-shop-card-home">
      <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
      <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
      <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
    </div>
  </div>
      }
    </div>
  )
}