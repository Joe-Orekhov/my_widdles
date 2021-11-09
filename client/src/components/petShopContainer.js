import PetShopCard from "./petShopCard";

export default function PetShopContainer({shopArr, currentUser }){


  return (
    <div>
      {!!shopArr[0] ?
      (
        shopArr.map(pet=>{
          return (
          <div className="pet-shop-container">
              <PetShopCard 
                pet={pet}
                currentUser={currentUser}
              />
          </div>
          )
          })
        ):(
          <h1>FINDIG PETS...</h1>
        )
      }
    </div>
  )
}