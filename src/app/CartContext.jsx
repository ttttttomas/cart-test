'use client'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
      const productFound = cart.findIndex((product) => product.id === item.id)
      
      if (productFound >= 0) {
        const newCart = structuredClone(cart)
        newCart[productFound].quantity += 1
        console.log(newCart)
        return setCart(newCart)
      }
      setCart(prevState => ([
        ...prevState,
        {
          ...item,
          quantity : 1
        }
      ]))
    };

    const removeFromCart = (item) => {
     setCart(prevState => prevState.filter((product) => product.id !== item.id))
    }

    const addQuantity = (item) => {
      const productFound = cart.findIndex((product) => product.id === item.id)
      if (productFound >= 0) {
        const newCart = structuredClone(cart)
        newCart[productFound].quantity += 1
        return setCart(newCart)
      }
    }

    const resetCart = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={{
          cart,
          setCart,
          addToCart,
          removeFromCart,
          addQuantity,
          resetCart
        }}
        >
          {children}
        </CartContext.Provider>
      )
}