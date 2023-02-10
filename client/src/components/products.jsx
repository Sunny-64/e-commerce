import React from 'react'
import productsData from './../scripts/products.json'
import Product from './Product'

function products() {
  return (
    <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 ">
        {productsData.map((item, index) => {
            return <Product 
                key = {index} 
                id = {item.id}
                name = {item.name}
                price = {item.price}
                image = {item.image}
            />
        })}
    </div>
  )
}

export default products
