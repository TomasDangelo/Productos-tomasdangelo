import React, {useState} from 'react'
import estilos from './itemCount.module.css'

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial)  

const sumar = () =>{   
  count < stock ? setCount(count + 1) :  alert("No se pueden agregar más productos al carrito")          
}                                                                                         
const restar = () =>{
    setCount(count - 1)
    let limiteInferior = 1
    count === limiteInferior && setCount(count)
}

onAdd = () => {
  let carrito = []
  const item = {nombre: "soy un item del carrito"}
  carrito.push(item)
  console.log(carrito)
  alert("Productos agregados exitosamente")
  setCount(initial)
}

return (
<div className={estilos.divcontainer}>    
            <h3 className={estilos.titulo}>Producto</h3>
            <div className={estilos.row}>
              <button className={estilos.buttons} onClick={restar}>-</button>
              <button className={estilos.buttons}>{count}</button>           
              <button className={estilos.buttons} onClick={sumar}>+</button>
            </div>         
            <button className={estilos.carrito} onClick={onAdd}>Agregar al carrito</button>
</div>
)
}

export default ItemCount