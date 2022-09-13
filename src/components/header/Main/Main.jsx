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

//Element: componente que voy a elegir que se renderice cuando este en pantalla de home
//Path: la ruta en si, a donde me dirige el linkeo
// luego de category/ los dos puntos aclaran que será una ruta dinámica
export default Main