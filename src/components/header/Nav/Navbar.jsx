import React from 'react'
import estilos from './nav.module.css'
import Button from '../../Button/Button'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={estilos.navBar}>
    <ul className={estilos.lista}>
        <li className={estilos.navitemdos}><NavLink className={estilos.navitemdos} to='/'>TOM'S STORE</NavLink></li>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/category/zapatillas'>Zapatillas</NavLink></li>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/category/remeras'>Remeras</NavLink></li>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/category/gorras'>Gorras</NavLink></li>
        <Button isInHeader={true}/>
    </ul>
    </nav>
    
  )
}

export default Navbar