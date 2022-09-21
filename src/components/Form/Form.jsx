import { addDoc, collection, serverTimestamp} from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { database } from '../../firebaseConfig';
import estilos from './form.module.css'

const Form = ({cart, total, clearCart, handleId}) => {
    const [nombre, setNombre] =     useState('')//React pide un estado por cada input
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] =       useState('')//También, que tengamos un value por c/ input (será dinamico, nuestro estado está leyendo todo el tiempo lo que hay ahí)
    
    const handleSubmit = (event) =>{
       event.preventDefault();
       const order = {
        buyer: {nombre: nombre, apellido: apellido, telefono: telefono, email: email},
        items: cart,
        total: total,
        date: serverTimestamp()
                     };

       const ordersCollection = collection(database, 'orders');
       addDoc(ordersCollection, order)
       .then((res)=>{
       handleId(res.id)
       clearCart()})
    };

    const handleChangeName = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeLastName = (event) =>{
        setApellido(event.target.value)
    }

    const handleChangePhone= (event) =>{
        setTelefono(event.target.value)
    }

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

  return (
<div className={estilos.container}>
    <h3>Ultimo paso: completá tus datos para finalizar tu compra</h3>
    <div className={estilos.containerinterno}>
    <form action="" onSubmit={handleSubmit}>
    <input className={estilos.input} type="text" placeholder='Nombre...' name="nombre" value={nombre} onChange={handleChangeName}/>
    <input className={estilos.input} type="text" placeholder='Apellido...' name="apellido" value={apellido} onChange={handleChangeLastName}/>
    <input className={estilos.input} type="text" placeholder='Telefono...' name="telefono" value={telefono} onChange={handleChangePhone}/>
    <input className={estilos.input} type="text" placeholder='Email...' name="email" value={email} onChange={handleChangeEmail}/>
    <button className={estilos.button}>
    <div class="svg-wrapper-1">
    <div class="svg-wrapper"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path>
    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path></svg></div></div>
    <span>Enviar</span>
    </button>
    </form>
    </div>
</div>
  )
}

export default Form