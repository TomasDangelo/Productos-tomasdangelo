import React from 'react'
import estilos from './item.module.css'
import {Link} from 'react-router-dom'

const Item = ({item , key}) => {
  return (
    <div key={key} className={estilos.divcontainer}>
      <div className={estilos.divflex}>
      <img className={estilos.imgg} src={item.img} alt="" width={150}/>
      <h3 className={estilos.titulo}>{item.title}</h3>       
      <Link to={`/item/${item.id}`}><button className={estilos.butt}>Detalles</button></Link>
      </div>
    </div>
  )
}

export default Item