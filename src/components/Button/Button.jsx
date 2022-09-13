import React from 'react'
import BuyWidget from '../header/Nav/BuyWidget'
import estilos from './button.module.css'
import { NavLink } from 'react-router-dom'

const Button = (prop) => {
return (prop.isInHeader? 
  (<button className={estilos.botonEstilado}>
  <NavLink to='/cart' className={estilos.link}>Ver carrito</NavLink>
  <BuyWidget/>
</button>) 
: 
  (<button className={estilos.botonEstilado}>
    <NavLink to='/cart' className={estilos.link}>Eliminar</NavLink>
    <BuyWidget/>
  </button>)
)
}



export default Button