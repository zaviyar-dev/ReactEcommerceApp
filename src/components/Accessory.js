import React from 'react'
import data from './data'
import Catagory from './Catagory'

const Accessory = () => {
    const other = data.productDataForAll.filter((val)=>val.catagory=='other')
    return (
        <div>
            <Catagory accessory={other}/>
        </div>
    )
}

export default Accessory
