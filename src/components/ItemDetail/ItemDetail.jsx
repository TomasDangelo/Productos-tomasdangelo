import React, {useState, useContext} from 'react'
import Button from '../Button/Button'
import estilos from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
 
const ItemDetail = ({item}) => {
const [cantidad, setCantindad] = useState(0)
const {addToCart, getProductQuantity} = useContext(CartContext)

const onAdd = (quantity) => {
  setCantindad(quantity)
  alert("Productos agregados exitosamente")
  addToCart(item, quantity)
}

const quantity = getProductQuantity(item.id)
//Para que siempre devuelva la canitdad que el cliente ya tiene en el carrito desde antes

  return (
<div key={item.id}>
    <div className={estilos.container}>
    <img className={estilos.image} src={item.img} alt={item.title} />
    <h2 className={estilos.title}>{item.title}</h2>
    <p className={estilos.price}><strong>Precio</strong><br></br>${item.price}</p>
    <p className={estilos.description}><strong>Stock disponible</strong><br></br>{item.stock} unidades</p>
    <p className={estilos.category}> <strong>Categoría</strong><br></br> {item.category}</p>
    </div>
    {cantidad === 0? (<ItemCount stock={item.stock} initial={quantity} onAdd={onAdd}/>) : ( <div className={estilos.botonCart}><Button isInHeader={true}/></div>)}
</div>
  )
}

export default ItemDetail