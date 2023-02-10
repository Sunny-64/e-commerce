import React from 'react'

function Product(props) {
    return (
        <div className="card m-5 flex flex-col justify-center ">
            <span className='mx-auto'>
                <img className="card-img p-5 rounded-t-lg" src={props.image} alt="product image" />
            </span>
            <div className="px-5 pb-5">
                <span href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                </span>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-2xl font-semibold text-gray-900 dark:text-white">price : {props.price}</span>
                    <a href="#" className="btn flex justify-center items-center rounded-sm">Add to cart</a>
                </div>
            </div>
        </div>

    )
}

export default Product
