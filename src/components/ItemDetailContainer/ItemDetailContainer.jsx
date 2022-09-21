import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { database } from '../../firebaseConfig'
import {collection, getDoc, doc} from 'firebase/firestore'
import Loader from '../Loader/Loader'
const ItemDetailContainer = () => {
const [item, setItem] = useState([])
const [isLoading, setIsLoading] = useState(true)
const {id} = useParams()
    
useEffect(()=>{
setIsLoading(true)
const itemCollection = collection(database, "productos")
const ref = doc(itemCollection, id)
getDoc(ref).then((res)=>{
setItem({  /* En este caso no tengo que mapear como en el itemListContainer, pq es un objeto */
id: res.id,
...res.data()})}).finally(()=> setIsLoading(false))}, [id])  

  return (
   <div>
    {isLoading? (<>
      <Loader></Loader></>
    ): ( <>
      <ItemDetail item={item}/></>
    )}
   </div>
  )
}
export default ItemDetailContainer
