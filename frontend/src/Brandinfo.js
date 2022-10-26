import { useState, useEffect } from "react"

import React from 'react'
import Branddetails from "./Branddetails"
import "./brandinfo.css"

export default function Brandinfo() {
   
    const [brands, setBrands] = useState([])
    const [active,setActive] = useState({})

    useEffect (() => {
        const fetcher = () => {
          fetch("http://localhost:3000/brands", {
            headers:{
              'content-type': 'application/json',
              'token': localStorage.getItem('token')
            }
          })
          .then (res => res.json()) 
          .then (data => 
            {setBrands(data)
            }
          )}
          fetcher()
        }, [] )

return(

    <div>

{brands.map((brands, i) => {
return <Branddetails brands={brands} key={brands.id} setActive={setActive}/>
    
})}
        <h1 className="brandinfo">{active.brandname}</h1>

    </div>
  )
}
