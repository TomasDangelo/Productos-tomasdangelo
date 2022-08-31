import React from 'react'
import Item from '../Item/Item'
import estilos from './itemlist.module.css'

const ItemList = ({items}) => {
  return (
    <div className={estilos.contenedorprods}>
        {items.map((item) =>{
            return <Item item={item} key={item.key}/>            
        })}
    </div>
  )
}

export default ItemList