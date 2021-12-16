import React from 'react'
import data from './data'
import Catagory from './Catagory'

const Women = () => {
    const women = data.productDataForAll.filter((val)=>val.catagory=='women')
    return (
        <div>
            <Catagory women={women}/>
        </div>
    )
}

export default Women
