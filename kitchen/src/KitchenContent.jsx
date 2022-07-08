import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { addToCart, useLoggedIn } from 'cart/cart';

import { getProductById, currency } from "home/products";

export default function KitchenContent() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const loggedIn = useLoggedIn();

    useEffect(() => {
        if (id) {
            getProductById(id).then(setProduct);
        } else {
            setProduct(null);
        }
    }, [id]);

    if (!product) return null;
    return (
        <div className="grid grid-cols-3 gap-5">
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div></div>
            <div>
                <div className="flex">
                    <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
                    <div className="font-bold text-3xl flex-end">
                        {currency.format(product.price)}
                    </div>
                </div>
                <div className="mt-10">{product.description}</div>
            </div>
            {loggedIn && (
                <div className="mt-2">
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
    );
}
