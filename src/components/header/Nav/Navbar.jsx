import React, {useState, useEffect} from 'react'
import estilos from './nav.module.css'
import Button from '../../Button/Button'
import {NavLink} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../../firebaseConfig'

const Navbar = () => {
const [categories, setCategories] = useState([])

  useEffect(()=>{
const collectionCategories = collection(database, "categorias")

getDocs(collectionCategories)
.then((res)=>{
const categorias = res.docs.map((cat)=>{
return {
id: cat.id,
...cat.data()}})
setCategories(categorias)})
}, [])

  return (
<nav className={estilos.navBar}>
<ul className={estilos.lista}>
<li className={estilos.navitemdos}><NavLink className={estilos.navitemdos} to='/'>TOM'S STORE</NavLink></li>
<>
{categories.map ((cat)=>(<li key={cat.id} className={estilos.navitem}><NavLink  className={estilos.navitem}
 to={`/category/${cat.route}`}>{cat.name}</NavLink></li>))}</>
<Button isInHeader={true}/>
</ul>
</nav>
    )
  }
  
  export default Navbar


    