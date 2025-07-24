import React, { useEffect, useState } from 'react'

function Clearup() {
    const [WidthCount,setWidthCount] = useState(window.screen.width)
 

    const currentScreenWidth = () => {
        setWidthCount(()=> window.innerWidth);
        return() => {
            window.removeEventListener("resize",currentScreenWidth)
        }
    }
    useEffect(()=>{
        window.addEventListener("resize",currentScreenWidth);
    })
 
 
    return (
    <div>
      <h1>The size of the window screen <span>{WidthCount}</span></h1>
    </div>
  )
}

export default Clearup
