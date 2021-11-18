
export default function PetImage({pix}){

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