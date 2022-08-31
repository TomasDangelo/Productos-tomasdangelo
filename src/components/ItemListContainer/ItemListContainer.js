import React, { useEffect, useState } from 'react'
import {Products} from '../../mock/Products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
const [items, setItems] = useState([])
const [contenidoCargando, setContenidoCargando] = useState(true)

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
.finally(()=>{setContenidoCargando(false)})
}, []) ///Fin del useEffect & Array de dependencias vacío


  return (
    <div>
      {contenidoCargando? (<h1>Cargando lista de productos...</h1>) : (<ItemList items={items}/>)}
    </div>
  )
}
export default ItemListContainer