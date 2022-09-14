import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import estilos from './Cart.module.css'

const Cart = () => {
const {cart, clearCart, removeItem, totalPrice} = useContext(CartContext)
const precioTotal = totalPrice()
console.log(cart)
console.log(totalPrice)

if (cart.length === 0){
return <div>
  <h3 className={estilos.vacio}>Tu carrito está vacío. 
  <br></br> Seleccioná algún producto y verás aquí lo que hayas elegido🛒</h3>
  <Button className={estilos.btnVolver} isInCart={false}></Button>
</div>
}

  return (
    <div className={estilos.divpadre}>
      <h2>Agregaste estos productos al carrito</h2>
       {cart.map((item)=> (
        <div className={estilos.divcontainer} key={item.id}>
            <img className={estilos.imagenMap} src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>Precio unitario: ${item.price}</p>
            <p>Cantidad seleccionada: {item.cantidad}</p>
            <button className={estilos.botonEstilado} onClick={()=>removeItem(item.id)}>Eliminar producto🗑️</button>
        </div>
       ))}
       <p className={estilos.parrafo}>Total de tu compra: ${precioTotal}</p>
       <button className={estilos.botonEstilado} onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}
export default Cart