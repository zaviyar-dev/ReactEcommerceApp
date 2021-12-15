import React, { useState } from 'react'

const FilterPage = (props) => {

    const [filterClass, setFilterClass] = useState('filter-page2')
    // const [SearchItem, setSearchItem] = useState([])
    const showFilterPage = (e) => {
        e.preventDefault()
        if (filterClass === 'filter-page2') {
            setFilterClass('filter-page')
        } else {
            setFilterClass('filter-page2')
        }
    }
    return (
        <>
            <div className="product-heading">
                <h1>Product Overview</h1>
                <div>
                    <a onClick={showFilterPage} href="#">Filter</a>
                </div>
            </div>
            <div className={filterClass}>
                {props.filterData.map((val) => {
                    return (
                        <div className='filter-items'>
                            <h2>{val.h2}</h2>
                            <a href=""><p className='filter-text'> {val.p1}</p></a>
                            <a href=""><p className='filter-text'> {val.p2}</p></a>
                            <a href=""><p className='filter-text'> {val.p3}</p></a>
                            <a href=""><p className='filter-text'> {val.p4}</p></a>
                            <a href=""><p className='filter-text'> {val.p5}</p></a>
                            <a href=""><p className='filter-text'> {val.p6}</p></a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FilterPage
