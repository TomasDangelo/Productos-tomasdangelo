import React from 'react'
import BuyWidget from '../header/Nav/BuyWidget'
import estilos from './button.module.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Button = (prop) => {
const {totalLength} = useContext(CartContext)
const totalProds = totalLength

return (prop.isInHeader? 
  (<button className={estilos.botonEstilado}>
  <BuyWidget/>
  <NavLink to='/cart' className={estilos.link}>{totalProds}</NavLink>
</button>) 
: 
  (<button className={estilos.botonEstiladoDos}>
    <NavLink to='/' className={estilos.link}>Volver a inicio</NavLink>
  </button>)
)
}



export default Button