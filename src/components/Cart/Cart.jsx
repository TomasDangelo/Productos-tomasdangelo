import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import estilos from './Cart.module.css'

const Cart = () => {
const {cart, clearCart, removeItem} = useContext(CartContext)
console.log(cart)

  return (
    <div className={estilos.divpadre}>
      <h2>Agregaste estos productos al carrito</h2>
       {cart.map((item)=> (
        <div className={estilos.divcontainer} key={item.id}>
            <img className={estilos.imagenMap} src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>Cantidad seleccionada: {item.cantidad}</p>
            <button className={estilos.botonEstilado} onClick={()=>removeItem(item.id)}>Eliminar producto</button>
        </div>
       ))}
       <button className={estilos.botonEstilado} onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}
export default Cart