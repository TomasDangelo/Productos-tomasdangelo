import React from 'react'
import estilos from './item.module.css'
const Item = ({item , key}) => {
  return (
    <div key={key} className={estilos.divcontainer}>
      <div className={estilos.divflex}>
      <h3>{item.title}</h3>
        <p>Categoría: {item.category}</p>
        <p>Precio: {item.price}</p>
        <p>Stock disponible: {item.stock}</p>
        <img src={item.img} alt="" width={150}/>
      </div>
    </div>
  )
}

export default Item