import {createContext, useState } from 'react'
import React from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {

const [cart, setCart] = useState([])

const addToCart = (item, cantidad) =>{
    const IsInCart = (id) => cart.find(prod => prod.id === id)
    IsInCart(item.id)? (cart.filter((item)=> (item.cantidad += cantidad))) : (setCart([...cart, {...item, cantidad}])) 
}

const clearCart = () =>{
  setCart([])
}

const removeItem = (id) => {
  const carritoFiltrado = cart.filter((prod)=> prod.id !== id) /* Me quedo solo con los prods que no tengan el id que me llega, porque elimino uno solo */
  setCart(carritoFiltrado)
  console.log("producto eliminado")
}

const getProductQuantity = (id) => {
  const product = cart.find((prod) => prod.id === id)
  return product?.cantidad
}  //El signo de pregunta (optional chaining) nos sirve para ahorrarnos hacer un ifelse, porque no nos retirnaría undefined en caso de que no exista la cantidad

const totalPrice = () =>{
  let acumulador = 0
  cart.forEach((prod) => {
    acumulador += prod.price * prod.cantidad
  })
  return acumulador
}

console.log(cart)

  return (
    <CartContext.Provider value={{cart, addToCart, clearCart, removeItem, getProductQuantity, totalPrice}}>
        {children}  {/* Son todos mis componentes que están envueltos por el contexto */}
    </CartContext.Provider>
  )
}

export default CartProvider
