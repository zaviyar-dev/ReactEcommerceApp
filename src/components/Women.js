import React from 'react'
import data from './data'
import Catagory from './Catagory'
import { CartProvider } from "react-use-cart"

const Women = () => {
    const women = data.productDataForAll.filter((val)=>val.catagory=='women')
    return (
        <div>
        <CartProvider>
            <Catagory women={women}/>
        </CartProvider>    
        </div>
    )
}

export default Women
