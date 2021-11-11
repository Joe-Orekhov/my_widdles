
export default function PetImage({pix}){

  console.log(!!parseInt(pix))
  return(
    !!parseInt(pix) ?(
    <div className="pet-image-pixel-black">

    </div>
    ):(
      <div className="pet-image-pixel-white">

      </div>
    )
  )
}