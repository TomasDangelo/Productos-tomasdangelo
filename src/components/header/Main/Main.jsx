import React from 'react'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import estilos from './main.module.css'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer' 
import {Routes , Route} from 'react-router-dom'
import Cart from '../../Cart/Cart'

const Main = () => {
  return (
    <main className={estilos.contenedorMain}>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </main>
      
  )
}
export default Main