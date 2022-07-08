import React, { useState, useEffect } from "react";

import { cart, clearCart } from './cart'
import { currency } from 'home/products'

export default function MiniCart() {
    const [items, setItems] = useState(undefined);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        setItems(cart.value?.cartItems);
        return cart.subscribe((c) => {
            setItems(c?.cartItems);
        });
    }, []);

    if (!items) return null;

    return (
        <>
            <div className="flex">
                <span onClick={() => setShowCart(!showCart)} id='showcart_span'>
                    <button className="my-5 p-2 border-2 bg-blue-600 rounded-md text-sm" id='showcart'>Show Cart</button>
                </span>
                <h5 className="my-5 mx-10">Cart item: {items.length}</h5>
                {showCart && (
                    <>
                        <div className="p-5 border-4 mt-2 mx-10 rounded-md border-blue-800"
                            style={{
                                width: 300, top: "2rem", left: "-250"
                            }}>
                            <div className="grid gap-3 text-sm"
                                style={{
                                    gridTemplateColumns: "1fr 3fr 10fr 2fr",
                                }}
                            >
                                {items.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <div>{item.quantity}</div>
                                        <img src={item.image} alt={item.name} className="max-h-6" />
                                        <div>{item.name}</div>
                                        <div className="text-right">
                                            {currency.format(item.quantity * item.price)}
                                        </div>
                                    </React.Fragment>
                                ))}
                                <div></div>
                                <div></div>
                                <div></div>
                                <div>
                                    {currency.format(
                                        items.reduce((a, v) => a + v.quantity * v.price, 0)
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-grow">
                                    <button id="clearcart" className="bg-white border border-green-800 text-black py-2 px-5 rounded-md text-sm"
                                        onClick={clearCart}>
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}