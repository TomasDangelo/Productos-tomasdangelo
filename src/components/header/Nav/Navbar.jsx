import React from 'react'
import estilos from './nav.module.css'
import CartWidget from './CartWidget'
import Button from '../../Button/Button'

const Navbar = () => {
  return (
    <nav className={estilos.navBar}>
    <ul className={estilos.lista}>
        <li className={estilos.navitem}>
          Inicio
        </li>
        <li className={estilos.navitem}>
            Servicios
        </li>
        <li className={estilos.navitem}>
            Productos
        </li>
        <li className={estilos.navitem}>
            Contacto            
        </li>
        <li className={estilos.navitem}>
            Ayuda
        </li>
        <CartWidget />
        <Button prop="Sign In"/>
    </ul>
    </nav>
    
  )
}

export default Navbar