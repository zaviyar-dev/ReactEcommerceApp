import React from 'react'
import data from './data'
import Catagory from './Catagory'
import { CartProvider } from "react-use-cart"

const Accessory = () => {
    const other = data.productDataForAll.filter((val)=>val.catagory=='other')
    return (
        <div>
        <CartProvider> 
            <Catagory accessory={other}/>
        </CartProvider>
        </div>
    )
}

export default Accessory
