import React from 'react'
import './clothinginfo.css'

export default function Clothingmap({clothing, setActive}) {
    function handleClick(){
        setActive(clothing)
    }
  return (
    <div>
        <h1 className='clothingitem' onClick={handleClick}>{clothing.clothing_type}</h1>
        {/* <img alt ="thing" src={clothing.image}
    onClick={handleClick}
    /> */}
    
    
    </div>
  )
}

