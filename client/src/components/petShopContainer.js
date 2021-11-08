import PetShopCard from "./petShopCard";

export default function PetShopContainer({shopArr}){

  console.log(shopArr)
  return (
    <div>
      {!!shopArr ?
      (
        shopArr.map(pet=>{
            <PetShopCard pet={pet}/>
          })
        ):(
          <h1>FINDIG PETS...</h1>
        )
      }
    </div>
  )
}