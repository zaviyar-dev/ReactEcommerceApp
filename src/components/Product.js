import React, { useContext } from 'react'
import FilterPage from './FilterPage'
import { useCart } from "react-use-cart"
import { productValues } from '../App'
import {filterData} from './data'

const Product = (props) => {
    const { addItem } = useCart();
    // const productData = useContext(productValues)

    return (
        <>
            <productValues.Consumer>
                {
                    (productData) => {
                        return (
                            <>
                                <div className="products">
                                    <FilterPage filterData={filterData} />
                                    <div className="product-card-container">
                                        {productData.map((val, index) => {
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

                            </>
                        )
                    }
                }
            </productValues.Consumer>
        </>
    )
}

export default Product;
