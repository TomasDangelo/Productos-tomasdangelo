import React, { useEffect, useState } from 'react'
import {Products} from '../../mock/Products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
const [items, setItems] = useState([])

useEffect(()=>{
  const obtenerProds = new Promise((resolve, reject)=>{
  setTimeout(() => {
  resolve(Products)
  }, 2000);
  }) ///Fin promesa
  
//Inicio captar promesa
obtenerProds
.then((datos)=>{
  setItems(datos)
})
.catch((error)=>{
  console.log("Error")
})

}, []) ///Fin del useEffect & Array de dependencias vacío


  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer