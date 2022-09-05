import React from 'react'
import BuyWidget from '../header/Nav/BuyWidget'
import estilos from './button.module.css'


const Button = () => {
  return (
    <button className={estilos.botonEstilado}>
      <BuyWidget/>
    </button>
  )
}

export default Button