import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Review.css";
import { useLoaderData } from "react-router-dom";
import Reviewitem from "../Reviewitem/Reviewitem";


const Review = () => {
    const savedCart = useLoaderData()
    const [cart, setCart]= useState(savedCart)
    const handleRemoveCart =(id)=>{
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining)
    }
  return (
    <div className="order">
      <div className="container">
        <div className="shop-content">
          <div className="review-product">
            {
              cart.map(product => <Reviewitem 
              key={product.id}
              product ={product}
              handleRemoveCart={handleRemoveCart}
              ></Reviewitem>)
            }
          </div>
          <div className="cart">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
