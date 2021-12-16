import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/SCart'
import Blog from './components/Blog'
import About from './components/About'
import COntact from './components/COntact'
import SingupPage from './components/SingupPage'
import LoginPage from './components/LoginPage'
import Footer from './components/Footer'
import './App.css';
import './responsive.css';
import products from '../src/components/data'
import {blogData} from '../src/components/data'
import {aboutData} from '../src/components/data'
import {createContext} from 'react'
import { CartProvider } from "react-use-cart"
import Women from './components/Women'
import Men from './components/Men'
import Accessory from './components/Accessory'
const productValues = createContext()
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path='/signup'>
            <SingupPage />
          </Route>
        <Route exact path='/women'>
            <Women />
          </Route>
        <Route exact path='/men'>
            <Men />
          </Route>
        <Route exact path='/access'>
            <Accessory />
          </Route>
          <Route exact path='/cart'>
          <CartProvider>
            <Cart />
            </CartProvider>
          </Route>
        <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route exact path='/home' render={() => {
            return (
              <productValues.Provider value = {products.productDataForOverview}>
              <Home />
              </productValues.Provider>
            )
          }}>
          </Route>
          <Route exact path='/shop'>
          <CartProvider>
            <Shop productDataForAll={products.productDataForAll} />
            </CartProvider>
          </Route>
          <Route exact path='/about'>
            <About aboutData = {aboutData} />
          </Route>
          <Route exact path='/blog'>
            <Blog blogData={blogData} />
          </Route>
          <Route exact path='/contact'>
            <COntact />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}
export default App
export {productValues}