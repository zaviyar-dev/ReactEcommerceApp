import {React,useEffect} from 'react'
import data from '../components//data'
import Catagory from '../components/Catagory'
import { CartProvider } from "react-use-cart"

const Men = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])   // ! getting user data data from input fields
      
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
