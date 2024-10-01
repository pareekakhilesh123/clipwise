import React from 'react'
import './NormalButton.css'

function NormalButton( {bname}) {
  return (
    <div>
     <div className="button-group">
            <button className="shop-btn">{bname}</button>
            <button className="about-btn">about us</button>
          </div>

    </div>
  )
}

export default NormalButton