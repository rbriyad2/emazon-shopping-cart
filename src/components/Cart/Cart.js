import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
//    const cart =props.cart;
console.log(cart)
let total=0;
let shippingTotal = 0
for(const product of cart){
    total = product.price +total;
    shippingTotal = product.shipping +  shippingTotal;

}
const taxtotal = total *7/100;
const subtotal =total + shippingTotal +taxtotal;


    return (
        <div className='cart-summary-in'>
            
            <h3 className='cart-summary-h3'>Order Summary</h3>
            <div className="summery">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shippingTotal}</p>
                <p>Tax: ${taxtotal.toFixed(2)}</p>
                <p>Grand Total: ${subtotal.toFixed(2)}</p>
                <button className='clear-cart'>Clear cart</button> <br/>
                <button className='review-order'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;