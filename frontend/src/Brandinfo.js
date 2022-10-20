import { useState, useEffect } from "react"
import React from 'react'
import Branddetails from "./Branddetails"

export default function Brandinfo() {
   
    const [brands, setBrands] = useState([])
    const [setActive] = useState({})

    useEffect (() => {
        const fetcher = () => {
          fetch("http://localhost:3000/brands")
          .then (res => res.json()) 
          .then (data => 
            {setBrands(data)
            }
          )}
          fetcher()
        }, [] )
        console.log(brands.brandname)

return(

    <div>

{brands.map((brands, i) => {
return <Branddetails brands={brands} key={brands.id} setActive={setActive}/>
    
})}
        <div>{brands.brandname}</div>

    </div>
  )
}
