import React from 'react'
// import './App.css';
import { Link } from 'react-router-dom'

const CateroryCard = () => {
    let card = [
        {
            catagory: "Women",
            text: "Summer 2021",
            img: "imges/women.png"
        },
        {
            catagory: "Men",
            text: "Summer 2021",
            img: "imges/men.png"
        },
        {
            catagory: "Fashion",
            text: "New Trand",
            img: "imges/access.png"
        }
    ]
    return (
        <>
            <div className="cat-card-container">
                {card.map((val) => {
                    return (
                        <>
                            <Link to="/shop">
                                <div className="cat-card">
                                    <div className="cat-card-text">
                                        <h2>{val.catagory}</h2>
                                        <p>{val.text}</p>
                                    </div>

                                    <div className="cat-card-img">
                                        <img src={val.img} alt="photo" />
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CateroryCard
