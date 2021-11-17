import PetShopCard from "./petShopCard";

export default function PetShopContainer({shopArr, currentUser }){

  return (
    <div>
      {!!shopArr[0] ?
      (
        <div className="pet-shop-card-home">
          {shopArr.map(pet=>{
            return (
                <div className="pet-shop-container">
                    <PetShopCard 
                      pet={pet}
                      currentUser={currentUser}
                    />
                </div>
          )
        })}
        </div>
        ):(
          <div>
              <h1 className="loading-stuff-title">Looking for Pets...</h1>
            <div className="pet-shop-card-home">
              <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
              <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
              <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
              <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
              <img className="heart-2" src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"></img>
            </div>
          </div>
        )
      }
    </div>
  )
}