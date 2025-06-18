"use client";
import {useContext} from "react";

import {CartContext} from "./CartContext";

export default function Products({data}) {
  const {addToCart,cart, removeFromCart} = useContext(CartContext);

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <section className="grid grid-cols-4 justify-center gap-4">
      {data.map(item => {
        const isProductInCart = checkProductInCart(item)

        return (
          <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <button
          className="my-2 rounded-full bg-white p-2 text-black cursor-pointer"
          onClick={() => {
            isProductInCart
            ? removeFromCart(item)
            : addToCart(item)
          }}
          >
            {
              isProductInCart
              ? "Eliminar"
              : "Agregar"
            }
          </button>
        </div>
        )
})}
    </section>
  );
}
