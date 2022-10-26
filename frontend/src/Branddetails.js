import React from 'react'
import "./brandinfo.css"

export default function Branddetails({brands,setActive}) {
    function handleClick(){
        setActive(brands)
    }
  return (
    <div className='thumb'><img className='brand' alt ="thing"style={{height: '250px', width: '250px'}} src={brands.full_img}
    onClick={handleClick}

    />
    
    
    </div>
  )
}
