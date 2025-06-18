"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, resetCart, addQuantity } = useContext(CartContext);

  return (
    <section className="fixed top-0 right-0 m-5 p-4">
      {cart.map((item) => (
        <div key={item.id}>
          <div className="bg-amber-100 text-black p-2">
            <p>{item.name}</p>
            <p>{item.category}</p>
            <div className="flex gap-2">
              <p>{item.quantity}</p>
              <button
                onClick={() => addQuantity(item)}
                className="bg-white px-2 font-bold"
              >
                +
              </button>
            </div>
            <p>{item.price}</p>
            ----
          </div>
          <button onClick={() => resetCart()}>Limpiar carrito</button>
          <Link href="./checkout">Terminar la compra</Link>
        </div>
      ))}
    </section>
  );
}
