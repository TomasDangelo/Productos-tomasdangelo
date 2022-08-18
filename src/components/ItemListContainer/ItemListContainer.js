import React from 'react'
import estilos from './item.module.css'

const ItemListContainer = ({saludo}) => {
  return (
    <div className={estilos.button}>{saludo}</div>
  )
}

export default ItemListContainer