import React from 'react'
import estilos from './nav.module.css'
import CartWidget from './CartWidget'

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
    </ul>
    </nav>
    
  )
}

export default Navbar