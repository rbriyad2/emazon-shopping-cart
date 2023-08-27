import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
//    const cart =props.cart;
// console.log(cart)
let totalPrice=0;
let shippingTotal = 0
let quantity =0;
for(const product of cart){
    // if(product.quantity ===0){
    //     product.quantity=1;
    // }

    // product.quantity = product.quantity ||1;
    totalPrice = product.price +totalPrice * product.quantity;
    shippingTotal = product.shipping +  shippingTotal;
    quantity =quantity + product.quantity;

}
const taxtotal = totalPrice *7/100;
const subtotal =totalPrice + shippingTotal +taxtotal;


    return (
        <div className='cart-summary-in'>
            
            <h3 className='cart-summary-h3'>Order Summary</h3>
            <div className="summery">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
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