import {React,useEffect} from 'react'
import data from '../components//data'
import Catagory from '../components/Catagory'
import { CartProvider } from "react-use-cart"

const Accessory = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) // ! scroll to top of the page everytime user come in thi page

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
