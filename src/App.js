import React from 'react';
import {ProductList} from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Navbar";
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
