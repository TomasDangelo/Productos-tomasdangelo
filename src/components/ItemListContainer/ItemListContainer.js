import React, { useEffect, useState } from 'react'
import {Products} from '../../mock/Products'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
const [items, setItems] = useState([])
const [contenidoCargando, setContenidoCargando] = useState(true)
const { id } = useParams()

useEffect(()=>{
      const obtenerProds = new Promise((resolve, reject)=>{
      const prodFiltrados = Products.filter((prod) => prod.category === id)
      setTimeout(() => {resolve(id? prodFiltrados : Products)}, 300);
      }) 
    obtenerProds
    .then((datos)=>{
      setItems(datos)
    })
    .catch((error)=>{
      console.log("Error")
    })
   
.finally(()=>{setContenidoCargando(false)})
}, [id]) 

  return (
    <div>
      {contenidoCargando? (<Loader/>) : (<ItemList items={items}/>)}
    </div>
  )
}
export default ItemListContainer