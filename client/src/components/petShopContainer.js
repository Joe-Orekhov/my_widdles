import PetShopCard from "./petShopCard";

export default function PetShopContainer({shopArr, currentUser }){

  return (
    <div className="pet">
      <div id="create-page-background">
          <img src="https://64.media.tumblr.com/a547e264d49d507ceeeda88442475d88/54ccbca508c1b94b-3f/s540x810/ddd6db8f068ab16faddbac5d7037e153d4ac153e.jpg" className="create-image" alt="" />
        </div>
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
              <h1 className="loading-stuff-title">Scannig for Cops...</h1>
            <div className="pet-shop-card-home">
              <img className="eye-ball" src="https://groundzerofxcks.carrd.co/assets/images/image13.gif?v34741482598451"></img>
              <img className="eye-ball" src="https://groundzerofxcks.carrd.co/assets/images/image13.gif?v34741482598451"></img>
              <img className="eye-ball" src="https://groundzerofxcks.carrd.co/assets/images/image13.gif?v34741482598451"></img>
            </div>
          </div>
        )
      }
    </div>
  )
}