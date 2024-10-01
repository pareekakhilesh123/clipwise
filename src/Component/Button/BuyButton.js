import React from 'react'
import './BuyButton.css'

function BuyButton({title}) {
  return (
    <div className='buybutton'>
        <a href="/" className="btn  ">{title}</a>
    </div>
  )
}

export default BuyButton