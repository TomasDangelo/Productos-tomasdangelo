import React, {useState, useEffect} from 'react'
import estilos from './nav.module.css'
import Button from '../../Button/Button'
import {NavLink, Link} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../../firebaseConfig'
import logo from '../../Logo/logo-segundo-diseño.png'

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
<>
<nav className={estilos.navBar}>
<ul className={estilos.lista}>
<Link className={estilos.navitemdos} to='/'><img className={estilos.imagen} src={logo} alt="logo-tomsStore"/></Link>
<>
{categories.map ((cat)=>(<li key={cat.id} className={estilos.navitem}><NavLink  className={estilos.navitem}
 to={`/category/${cat.route}`}>{cat.name}</NavLink></li>))}</>
<Button isInHeader={true}/>
</ul>
</nav>
</>
    )
  }
  
  export default Navbar


    