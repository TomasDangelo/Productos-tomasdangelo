import React from 'react'
import BuyWidget from '../header/Nav/BuyWidget'
import estilos from './button.module.css'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <button className={estilos.botonEstilado}>
      <Link to='/cart' className={estilos.link}>Ver carrito</Link>
      <BuyWidget/>
    </button>
  )
}

export default Button