import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { database } from '../../firebaseConfig'
import {collection, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
const [item, setItem] = useState([])
const {id} = useParams()
    
useEffect(()=>{
const itemCollection = collection(database, "productos")
const ref = doc(itemCollection, id)
getDoc(ref).then((res)=>{
console.log(res)
setItem({  /* En este caso no tengo que mapear como en el itemListContainer, pq es un objeto */
id: res.id,
...res.data()})})}, [id])  

  return (
   <div>
   <ItemDetail item={item}/>
   </div>
  )
}
export default ItemDetailContainer
