import React from 'react'
import data from './data'
import Catagory from './Catagory'

const Men = () => {
    const men = data.productDataForAll.filter((val)=>val.catagory=='men')
    return (
        <div>
            <Catagory men={men}/>
        </div>
    )
}

export default Men
