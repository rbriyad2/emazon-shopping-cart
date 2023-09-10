import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './components/Loader/CartProductsLoader';
import Checkout from './components/Checkout/Checkout';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:<Shop></Shop>
      },
      {
        path: '/order',
        element: <Review></Review>,
        loader: cartProductLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
