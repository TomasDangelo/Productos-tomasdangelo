import React, {useState} from 'react'
import Button from '../Button/Button'
import estilos from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
 
const ItemDetail = ({item}) => {
const [cantidad, setCantindad] = useState(0)
const onAdd = (quantity) => {
  setCantindad(quantity)
  let carrito = []
  const item = {nombre: "soy un item del carrito"}
  carrito.push(item)
  console.log(carrito)
  alert("Productos agregados exitosamente")
}

// onAdd = () => {
//   
//   
//   setCount(initial)
// }

  return (
<div key={item.id}>
    <div className={estilos.container}>
    <img className={estilos.image} src={item.img} alt={item.title} />
    <h2 className={estilos.title}>{item.title}</h2>
    <p className={estilos.price}><strong>Precio</strong><br></br>${item.price}</p>
    <p className={estilos.description}><strong>Stock disponible</strong><br></br>{item.stock} unidades</p>
    <p className={estilos.category}> <strong>Categoría</strong><br></br> {item.category}</p>
    </div>
    {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> */}
    {cantidad === 0? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>) : ( <div className={estilos.botonCart}><Button/></div>)}
</div>
  )
}

export default ItemDetail