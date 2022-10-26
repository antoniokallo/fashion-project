import React from 'react'
import Clothingmap from './Clothingmap'
import { useState, useEffect } from "react"
import './clothinginfo.css'

export default function Clothinginfo() {
    const [clothing, setClothing] = useState([])
    const [active,setActive] = useState({})

    useEffect (() => {
        const fetcher = () => {
          fetch("http://localhost:3000/clothings", {
            headers: {
              'content-type': 'application/json',
              'token': localStorage.getItem('token')
            }
          })
          .then (res => res.json()) 
          .then (data => 
            {setClothing(data)
            }
          )}
          fetcher()
        }, [] )

return(

    <div>


{clothing.map((clothing, i) => {
return <Clothingmap className="clothinginfo" clothing={clothing} key={clothing.id} setActive={setActive}/>
    
})}
        <img className='clothing' style={{height: '300px', width: '300px'}} src={active.image}/>
<button> add </button>
    </div>
  )
}


