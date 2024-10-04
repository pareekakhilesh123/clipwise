import React from 'react'
import './CardSection.css'
import CardComponent from './Component/CardComponent/CardComponent'
 

function CardSection() {
    const products = [
        {
          id: 1,
          name: "Crystal Agate Phone Grip",
          price: "18.99$",
          imageUrl: "/clipwise/img/Crystal_Agate.png",
        },
        {
          id: 2,
          name: "Crystal Agate Phone Grip",
          price: "18.99$",
          imageUrl: "/clipwise/img/Crystal_Agate.png",
        },
        {
            id: 2,
            name: "Crystal Agate Phone Grip",
            price: "18.99$",
            imageUrl: "/clipwise/img/Crystal_Agate.png",
          },  {
            id: 2,
            name: "Crystal Agate Phone Grip",
            price: "18.99$",
            imageUrl: "/clipwise/img/Crystal_Agate.png",
          },
        
            {
              id: 2,
              name: "Crystal Agate Phone Grip",
              price: "18.99$",
              imageUrl: "/clipwise/img/Crystal_Agate.png",
            },
        
            {
              id: 2,
              name: "Crystal Agate Phone Grip",
              price: "18.99$",
              imageUrl: "/clipwise/img/Crystal_Agate.png", 
            },
        
            {
              id: 2,
              name: "Crystal Agate Phone Grip",
              price: "18.99$",
              imageUrl: "/clipwise/img/Crystal_Agate.png",
            },
        
            {
              id: 2,
              name: "Crystal Agate Phone Grip",
              price: "18.99$",
              imageUrl: "/clipwise/img/Crystal_Agate.png",
            }
      
      ];

  return (
    <div className='cardsection'>
    <h1 className='title'> All Product</h1>
    <div className="controls">
        <div className="filter">
          <label>Filter: </label>
          <select>
            <option>All Products</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>
        
        <div className="sort">
          <label>Sort: </label>
          <select>
            <option>Best Selling</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>
        </div>
      
        <div className='cardflex'>
        {products.map((product) => (
          <CardComponent
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl} 
          />

        ))}

      
        </div>

        

        
      
            

    </div>

  )
}

export default CardSection