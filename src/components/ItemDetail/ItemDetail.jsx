import React from 'react'
import estilos from './ItemDetail.module.css'

const ItemDetail = ({item}) => {
  return (
<div key={item.id}>
    <div className={estilos.container}>
    <h2 className={estilos.title}>{item.title}</h2>
    <p className={estilos.price}><strong>Price</strong><br></br>{item.price}</p>
    <p className={estilos.description}> <strong>Brief description</strong><br></br> {item.description}</p>
    <p className={estilos.category}> <strong>Category</strong><br></br> {item.category}</p>
    <img className={estilos.image} src={item.image} alt={item.title} />
    </div>
</div>
  )
}

export default ItemDetail