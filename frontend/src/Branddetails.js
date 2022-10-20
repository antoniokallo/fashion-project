import React from 'react'

export default function Branddetails({brands,setActive}) {
    function handleClick(){
        setActive(brands)
    }
  return (
    <div><img alt ="thing"style={{height: '500px', width: '500px'}} src={brands.full_img}
    onClick={handleClick}
    />
    
    
    </div>
  )
}
