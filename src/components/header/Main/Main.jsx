import React from 'react'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import estilos from './main.module.css'

const Main = () => {
  return (
    <main className={estilos.contenedorMain}>
       <ItemListContainer/>
    </main>
      
  )
}

export default Main