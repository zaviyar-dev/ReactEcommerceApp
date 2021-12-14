import React from 'react'
import CateroryCard from './CateroryCard'
import Product from './Product'
import { CartProvider } from "react-use-cart"

const Home = () => {
    return (
        <>
            <div className="custom-home-container">
                <div className="home-text">
                    <h1>New Arrival</h1>
                    <h1>On</h1>
                    <h1>MyStore</h1>
                    <a className="comman-btn" href="/shop">Shop Now</a>
                </div>
            </div>
            <CateroryCard />
            <CartProvider>
                <Product/>
            </CartProvider>
        </>
    )
}

export default Home
