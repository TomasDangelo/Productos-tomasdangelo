import React from 'react'
import Button from '../Button/Button'
import estilos from './ItemDetail.module.css'

const ItemDetail = ({item}) => {
  return (
<div key={item.id}>
    <div className={estilos.container}>
    <img className={estilos.image} src={item.img} alt={item.title} />
    <h2 className={estilos.title}>{item.title}</h2>
    <p className={estilos.price}><strong>Precio</strong><br></br>${item.price}</p>
    <p className={estilos.description}><strong>Stock disponible</strong><br></br>{item.stock} unidades</p>
    <p className={estilos.category}> <strong>Categoría</strong><br></br> {item.category}</p>
    <Button/>    
    </div>
</div>
  )
}

export default ItemDetail