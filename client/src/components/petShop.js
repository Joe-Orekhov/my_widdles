import PetShopContainer from "./petShopContainer";

export default function PetShop({ shopArr }){

  return (
    <div>
      <h1>PetShop</h1>
      <PetShopContainer shopArr={shopArr}/>
    </div>
  )
}