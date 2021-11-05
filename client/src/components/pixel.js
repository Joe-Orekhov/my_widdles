import { useState } from 'react';

export default function Pixel({pix, blackBoxs}){

  const [ blacked, setBlacked ] = useState(false)
  const [ color, setColor ] = useState("white")
  const [ blackPix, setBlackPix ] = useState([])
  

  function handleClick(e){

    if(blacked === true){
      setBlacked(false)
      let cc = blackBoxs.indexOf(e.target.value)
      console.log(cc)
      blackBoxs.splice(cc, 1)
    }else{
      setBlacked(true)
      blackBoxs.push(e.target.value)
    }

    if(e.target.style.backgroundColor === "white"){
      setColor("black")
    }else{
      setColor("white")
    }


  }

    return (
      <button 
      className="create-pixel" 
      value={pix} 
      name={blacked}
      style={{backgroundColor: color}}
      onClick={(e)=> handleClick(e)}
      ></button>
    )

}