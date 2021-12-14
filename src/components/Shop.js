import React from 'react'
import { useCart } from "react-use-cart"

const Shop = (props) => {
    const { addItem } = useCart();
    return (
        <div className="product-card-main-container">
            <div className="product-card-container">
                {props.productDataForAll.map((val, index) => {
                    return (
                        <div key={index} className="product-card">
                            <div className="product-img">
                                <img src={val.img} alt="" />
                            </div>
                            <div className="product-text">
                                <p>{val.text}<br />{val.price}</p>
                            </div>
                            <a onClick={() => {
                                alert(`${val.text} added in your cart`)
                                addItem(val)
                            }} className="product-btn">Add to cart</a>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Shop
