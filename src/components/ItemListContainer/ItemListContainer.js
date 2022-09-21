import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import estilos from './item.module.css'
import Loader from '../Loader/Loader'
const ItemListContainer = () => {
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)
const { id } = useParams()

    useEffect(()=>{
setIsLoading(true)
const itemCollection = collection(database, "productos")
  if (!id){
getDocs(itemCollection).then((res)=>{
const products = res.docs.map((prod)=>{       
return {
 id: prod.id,          
 ...prod.data()        
        }}) 
setItems(products)}).finally(()=>setIsLoading(false))} 

  else{
const q = query(itemCollection, where("category","==", id))
getDocs(q).then((res)=>{
const products = res.docs.map((prod)=>{       
return {
id: prod.id,          
...prod.data()}}) 
setItems(products)
}).finally(()=> setIsLoading(false))}},[id])

  return ( 
    <div className={estilos.divcont}>
      {isLoading? (
      <><Loader></Loader></>
      ) : (
      <>
    <ItemList items={items}/>
      </>
    )}
  </div>
  )
}
export default ItemListContainer