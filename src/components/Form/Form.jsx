import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [talle, setTalle] = useState('')
    //React pide un estado por cada input
    //También, que tengamos un value por c/ input (será dinamico, nuestro estado está leyendo todo el tiempo lo que hay ahí)
    
    const handleSubmit = (event) =>{
            //Opciones NO CONTROLADAS - NO RECOMENDADAS
    // console.log(event.target)
    // console.log(event.target.elements.nombre.value) //Para acceder al value del input
    // console.log(event.target.elements.apellido.value) 
    }

    const handleChangeName = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeLastName = (event) =>{
        setApellido(event.target.value)
    }

    // const handleMousemove = (e) => {
    //     console.log(e)
    // }

    const handleChangeTalle = (e) => {
        setTalle(e.target.value)
    }
    // useEffect(()=>{

    //     window.addEventListener('mousemove' , handleMousemove) //En este caso necesitaríamos js porque es un evento captable con window
    //     console.log("Creo evento")
    //     //Este return, luego del primer renderizado, cuando haya un cambio de estado, siempre se ejecutará ANTES y primero que el evento que tengo arriba, el cual quiero eliminar, porque sino se me almacenaría siempre en mi memoria
    //     return () => {
    //     window.removeEventListener('mousemove' , handleMousemove)
    //     console.log("Borro evento")
    //     }
    // }, [])

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder='Nombre...' name="nombre" value={nombre} onChange={handleChangeName}/>
    <input type="text" placeholder='Apellido...' name="apellido" value={apellido} onChange={handleChangeLastName}/>
    <input type="number" id="edad" placeholder='Edad...'/>
    <button>Enviar</button>
    <select value={talle} onChange={handleChangeTalle} name="" id="">
        <option value="Large">L</option>
        <option value="Medium">M</option>
        <option value="Small">S</option>
    </select>
        </form>
    </div>
  )
}

export default Form