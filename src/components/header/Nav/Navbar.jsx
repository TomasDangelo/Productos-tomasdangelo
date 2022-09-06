import React from 'react'
import estilos from './nav.module.css'
import CartWidget from './CartWidget'
import Button from '../../Button/Button'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={estilos.navBar}>
    <ul className={estilos.lista}>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/'>Tom's Store</NavLink></li>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/category/zapatillas'>Zapatillas</NavLink></li>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/category/remeras'>Remeras</NavLink></li>
        <li className={estilos.navitem}><NavLink className={estilos.navitem} to='/category/gorras'>Gorras</NavLink></li>
        {/* <NavLink to='/cartwidget'>  <CartWidget />  </NavLink>       */}
        <Button prop="Sign In"/>
    </ul>
    </nav>
    
  )
}

export default Navbar