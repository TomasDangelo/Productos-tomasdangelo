import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import estilos from './Cart.module.css'
import Form from '../Form/Form'
import BuyWidget from '../header/Nav/BuyWidget'
import {MdDelete} from 'react-icons/md'


const Cart = () => {
const {cart, clearCart, removeItem, totalPrice} = useContext(CartContext)
const [idCompra, setIdCompra] = useState('')
const precioTotal = totalPrice()

const handleId = (id) =>{
  setIdCompra(id)
}
if(idCompra) {
  return (
  <div className={estilos.card}>
  <h1 className={estilos.tituloCard}>Gracias por comprar! <br></br>Tu id es: <br /> {idCompra}</h1>
  <h3 className={estilos.subtituloCard}>Recordá guardarlo para hacer seguimiento de tu compra </h3>
  </div>)
  }
  

if (cart.length === 0){
return <div className={estilos.card}>
<h3 className={estilos.tituloCard}>Tu carrito está vacío. 
<br></br> Seleccioná algún producto y verás aquí lo que hayas elegido <BuyWidget></BuyWidget></h3>
<div className={estilos.centrarButton}><Button className={estilos.btnVolver} isInCart={false}></Button></div>
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
    <button className={estilos.botonEstilado} onClick={()=>removeItem(item.id)}>Eliminar<MdDelete></MdDelete></button>
    <button className={estilos.botonEstilado} onClick={clearCart}>Vaciar carrito</button>
</div>))}
<p className={estilos.parrafo}>Total de tu compra: ${precioTotal}</p>
<Form cart={cart} total={precioTotal} clearCart={clearCart} handleId={handleId}></Form>
</div>
  )
}
export default Cart