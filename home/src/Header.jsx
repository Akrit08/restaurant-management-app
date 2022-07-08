import React from "react";
import MiniCart from "cart/MiniCart"
import Login from "cart/Login"

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="p-5 bg-gray-800 text-white text-3xl">
                <div className="flex">
                    <div className="flex-grow flex">
                        <Link to="/">Restaurant Management</Link>
                        <div className="mx-5">|</div>
                        <Link id="cart" to="/cart">Cart</Link>
                    </div>
                    <div className="flex-end relative">
                        <Login />
                    </div>
                </div>
            </div>
            <div>
                <MiniCart />
            </div>
        </>
    );
}