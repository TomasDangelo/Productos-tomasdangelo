import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [contenidoCargando, setContenidoCargando] = useState(true)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/8')   /* Llamado a la API */
        .then(res=>res.json()) 
        .then((res)=> {setItem(res)})
        .finally(()=>{setContenidoCargando(false)})
    }, [])  

  return (
    <div>
        {contenidoCargando? (<h1>Cargando producto...</h1>) : (<ItemDetail item={item}/>)}
   </div>
  )
}
export default ItemDetailContainer
