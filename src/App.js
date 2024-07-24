import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";


import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home></Home>
        ),
    },
    {
        path: "sign-in",
        element: <LoginPage />,
    },
    {
        path: "sign-up",
        element: <SignupPage />,
    },
    {
        path: "cart",
        element: <CartPage />,
    },
    {
        path: "checkout",
        element: <Checkout />,
    },
    {
        path: "product-detail",
        element: <ProductDetail />,
    },
]);



function App() {
  return (
    <div className="App">
        <RouterProvider router={router} >
        </RouterProvider>
    </div>
  );
}

export default App;
