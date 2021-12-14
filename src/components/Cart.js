import React from 'react'
import { useCart } from "react-use-cart"

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) {
        return <h1 className="feature-container">Your Cart is Empty</h1>
    }

    return (
        <>
            <div className="feature-container">
                <div className="product-details">
                   {/*  <table>
                        <thead>
                            <tr>
                                <th style={{margin:'10vw'}}>Product</th>
                                <th style={{margin:'10vw'}}>Price</th>
                                <th style={{margin:'10vw'}}>Quantity</th>
                                <th style={{margin:'10vw'}}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item,index)=>{
                                    return(
                                        <>
                                            <tr>
                                                <td className='cart-product-img'><img src= {item.img} style={{height:'6rem'}} alt="photo" />{item.text}</td>
                                                <td><h4>{item.price}</h4></td>
                                                <td>
                                                <span className="product-no">
                                                    <span className='varies' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</span>
                                                    <span><input type="text" placeholder={item.quantity} /></span>
                                                    <span className='varies' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</span>
                                                </span>
                                                </td>
                                                <td><a className="comman-btn" onClick={() => removeItem(item.id)} style={{ top: '0vw' }}>Remove</a></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                            {/* <tr className="product-btns">
                            <td><h3>Total: ${cartTotal}</h3></td>
                            <td><a>Apply Coupon</a></td>
                            <td><a onClick={() => emptyCart()}>Clear Cart</a></td>
                        </tr> 
                        </tbody>
                    </table> */}


                     <table>
                        <thead>
                            <tr className='product-table-header'>
                                <th><span>Product</span></th>
                                <th><span>Price </span></th>
                                <th><span>Quantity </span></th>
                                <th><span>Remove</span></th>
                            </tr>
                        </thead>
                        {
                            items.map((item, index) => {
                                return (
                                    <>
                                        <tbody>
                                        <tr className="product-stuff" key={index}>
                                            <td><img src={item.img} alt="photo" /><p>{item.text}</p></td>
                                            <td style={{marginLeft:'4rem'}}><p>${item.price}</p></td>
                                            <td>
                                                <span className="product-no">
                                                    <span className='varies' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</span>
                                                    <span><input type="text" placeholder={item.quantity} /></span>
                                                    <span className='varies' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</span>
                                                </span>
                                            </td>
                                            <td><a className="comman-btn" onClick={() => removeItem(item.id)} style={{ top: '0vw' }}>Remove</a></td>
                                        </tr>
                                        </tbody>
                                    </>
                                )
                            })
                        }
                        <tr className="product-btns">
                            <td><h3>Total: ${cartTotal}</h3></td>
                            <td><a>Apply Coupon</a></td>
                            <td><a onClick={() => emptyCart()}>Clear Cart</a></td>
                        </tr>
                        
                    </table> 
                </div>
                {/* <div className="cart-details">
                    <div className="cart-details-items">
                        <div className="cart-details-heading">
                            <h3>Cart Totals</h3>
                            <h5>Subtotal: &nbsp;&nbsp; $79.65</h5>
                        </div>
                        <div className="cart-details-shiping">
                            <h5>Shipping:</h5>
                            <div className="shiping-text">
                                <p>There are no shipping  methods available. Please
                                    double check your address, or contact us if you need
                                    any help.</p>
                                <div>
                                    <label htmlFor="county">Choose Shiping</label>
                                    <select name="country" id="country">
                                        <option value="Pakistan">Select a Country</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UAE">UAE</option>
                                    </select>
                                    <input type="text" placeholder='state/province' />
                                    <input type="text" placeholder='zip/postal' />
                                    <a href="#">Update Total</a>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <div>
                                <h4>Total</h4>
                                <p>$ 79.65</p>
                            </div>
                            <a href="#">Proceed To Checkout</a>
                        </div>
                    </div>
                </div>*/}
            </div>
        </>
    )
}

export default Cart
