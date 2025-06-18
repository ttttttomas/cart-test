import {useContext} from "react";

import {ProductType} from "../types";
import {CartContext} from "./CartContext";

export default function Checkout() {
  const {cart} = useContext(CartContext);

  const subtotal = cart.reduce(
    (acc: number, product: ProductType) => acc + product.price * product.quantity,
    0,
  );
  const tax = subtotal * 0.16; // 16% de impuestos
  const total = subtotal + tax;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Checkout</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Lista de Productos */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">Tu Carrito</h2>
          <div className="space-y-4">
            {cart.map((product: ProductType) => (
              <div
                key={product.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">Cantidad: {product.quantity}</p>
                </div>
                <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen del Pedido */}
        <div className="rounded-lg bg-gray-50 p-4">
          <h2 className="mb-4 text-xl font-semibold">Resumen del Pedido</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Impuestos (16%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700">
            Realizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
