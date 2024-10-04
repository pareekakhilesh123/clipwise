import React from 'react'
import './LastSection.css'
import BuyButton1 from './Component/Button/BuyButton1'

function LastSection() {
  return (
    

         <div className="offer-container">
         <div className="vetorimg2">
      <div className="offer-content">
        <h2 className="best-price">BEST PRICE</h2>
        <h1 className="product-title">Agate Phone Grip</h1>
        <div className="price">
          <span className="original-price">44.50$</span>
          <span className="discount-price">19.50$</span>
        </div>
        <p className="description">
        These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
        </p>
      <BuyButton1 
        title={'BUY NOW'}
      />
      </div>
      <div className=" half-circle">
      <div className="offer-image-circle1">
      <div className="offer-image-circle2">
        <img src="/clipwise/img/Crystal_Agate.png" alt="Agate Phone Grip" />
        </div>
      </div>
      </div>
      </div>
    </div>
   
  )
}

export default LastSection