import React from "react";

import { useState, useEffect } from "react";
import { addToCart, useLoggedIn } from "cart/cart";
import { Link } from 'react-router-dom'
import { getProducts, currency } from "./products";

export default function HomeContent() {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                    <Link to={`/product/${product.id}`}>
                        <a className="font-bold">{product.name}</a>
                    </Link>
                    <div className="text-2xl">{currency.format(product.price)}</div>
                    <div className="text-lg mt-4">{product.description}</div>
                    {loggedIn && (
                        <div className="text-right mt-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                                onClick={() => addToCart(product.id)}
                                id={`addtocart_${product.id}`}
                            >
                                Order Item
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}


