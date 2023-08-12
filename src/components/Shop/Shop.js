import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts]= useState([]);
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[]);

    const handleaddToCart= (product)=>{
        const newcart =[...cart, product]
        setCart(newcart)
    }
    
    return (
        <div className='shop'>
            <div className="container">
                <div className="shop-content">
                    <div className="product">
                        {products.map(product =><Product
                        key={product.id}
                        product={product}
                        handleaddToCart={handleaddToCart}
                        ></Product>)}
                        
                    </div>
                    <div>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;