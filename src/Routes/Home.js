import {React,useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import CateroryCard from '../components/CateroryCard'
import Product from '../components/Product'
import { CartProvider } from "react-use-cart"
import {authContext} from '../Authenticaton/AuthProvider'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const history = useHistory()
      const {user} = useContext(authContext)
      useEffect(() => {
          if (!user) {
              history.push('/login')
          }
          
      }, [user, history])
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
