import React from 'react'
import data from './data'
import Catagory from './Catagory'
import { CartProvider } from "react-use-cart"

const Men = () => {
    const men = data.productDataForAll.filter((val)=>val.catagory=='men')
    return (
        <div>
        <CartProvider>
            <Catagory men={men}/>
        </CartProvider>
        </div>
    )
}

export default Men
