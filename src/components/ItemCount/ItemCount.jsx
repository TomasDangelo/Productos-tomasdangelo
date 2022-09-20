import React, {useState} from 'react'
import { useEffect } from 'react'
import estilos from './itemCount.module.css'

const ItemCount = ({stock, initial = 1, onAdd}) => {

const [count, setCount] = useState(initial)  

useEffect(()=>{
  setCount(initial)

},[initial])

const sumar = () =>{   
  count < stock && setCount(count + 1)         
}                                                                                         
const restar = () =>{
    setCount(count - 1)
    let limiteInferior = 1
    count === limiteInferior && setCount(count)
}

return (
<div className={estilos.divcontainer}>    
            <h3 className={estilos.titulo}>Agregá tu producto al carrito 🛒</h3>       
            <div className={estilos.row}>
              <button className={estilos.buttons} onClick={restar}>-</button>
              <button className={estilos.buttons}>{count}</button>           
              <button className={estilos.buttons} onClick={sumar}>+</button>
            </div>         
            <button className={estilos.carrito} onClick={()=>onAdd(count)}>Agregar al carrito</button>
</div>
)
}

export default ItemCount