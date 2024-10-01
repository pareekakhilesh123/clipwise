import React from 'react'
import './CardComponent.css'
import BuyButton from '../Button/BuyButton'

function CardComponent({ name, price, imageUrl }) {
  return (
    <div className='cardcomponent'>
          <div className="card">
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-primary">{price}</p>
          <BuyButton
          title={'BUY NOW'} />

        </div>
      </div>
    </div>
  )
}

export default CardComponent