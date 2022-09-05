import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { Products } from '../../mock/Products'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [contenidoCargando, setContenidoCargando] = useState(true)
    const {id} = useParams()
    
    useEffect(()=>{
        const idNumerico = Number(+id)
        const obtenerProds = new Promise((resolve, reject)=>{
        const productofiltrado = Products.find((prod) => prod.id === idNumerico)
        setTimeout(() => {
          resolve(id? productofiltrado : Products)
          }, 1000);
              })
          obtenerProds
              .then((datos)=>{
                setItem(datos)
              })

        .finally(()=>{setContenidoCargando(false)})
    }, [id])  

  return (
    <div>
        {contenidoCargando? (<Loader/>) : (<ItemDetail item={item}/>)}
   </div>
  )
}
export default ItemDetailContainer
