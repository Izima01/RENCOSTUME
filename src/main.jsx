import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Listing from './Pages/ProductListing/Listing.jsx';
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Checkout from './Pages/CheckoutPage/Checkout.jsx';
import Success from './Pages/Success/Success.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'gallery',
        element: <Listing />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'shopping-cart',
        element: <Cart />
      },
      {
        path:'success',
        element: <Success />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
