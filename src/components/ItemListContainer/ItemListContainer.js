import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import estilos from './item.module.css'

const ItemListContainer = () => {
const [items, setItems] = useState([])
const { id } = useParams()

useEffect(()=>{
const itemCollection = collection(database, "productos")
if (!id){
getDocs(itemCollection).then((res)=>{
const products = res.docs.map((prod)=>{       
return {
 id: prod.id,          /* Agregamos el id de c/ prod porque no se muestra solo con la prop "docs"; luego spread para obtener el resto */
 ...prod.data()        /* .data() es método de firestore para acceder a sus datos proveniente de bases */
        }}) 
setItems(products)})} 

else{
const q = query(itemCollection, where("category","==", id))
getDocs(q).then((res)=>{
const products = res.docs.map((prod)=>{       
return {
id: prod.id,          /* Agregamos el id de c/ prod porque no se muestra solo con la prop "docs"; luego spread para obtener el resto */
...prod.data()        /* .data() es método de firestore para acceder a sus datos proveniente de bases */}}) 
setItems(products)

})}},[id])

  return (
  <div className={estilos.divcont}>
  <ItemList items={items}/>
  </div>
  )
}
export default ItemListContainer