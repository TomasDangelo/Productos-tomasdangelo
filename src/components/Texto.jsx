import React, {useState, useEffect} from 'react'

const Texto = () => {
    const [nombre, setNombre] = useState('Tomas')
    const [valorBooleano, setvalorBooleano] = useState(true)

    const cambiarNombre = () =>{
       nombre === 'Tomas' ? setNombre('Juan') : setNombre('Tomas')
    }

    const cambiarValor = () =>{
        setvalorBooleano(!valorBooleano) //El signo de exclamación nos permite cambiar el valor previo, hace un switch
    }

    //useEFfect: Se ejecuta siempre que haya un cambio de estado, o cambio de prop, o se dispare algun evento que modifique alguna de esas
    //dos variables.
    useEffect(()=>{
        console.log('me ejecuto siempre')  //Se renderiza después porque primero espera al renderizado de todo el componente para ejecutarse
    })

    //Si se ejecuta con un segundo parámetro (el cual será un array de dependencias que puede ir vacío), se ejecutará una sola vez
    useEffect(()=>{
    console.log("me ejecuto una sola vez")  //Sirve más que nada para tareas pesadas / consultas a base de datos 
    }, [])

    useEffect(()=>{
        console.log("me ejecuto una sola vez y cada vez que cambie {valorBooleano}") 
        }, [valorBooleano])  // Escucha si esto cambia de estado para ejecutarse. Podemos agregar varios.

  return (
    <div>
        <p>Mi nombre es {nombre}</p>
        {valorBooleano ? <h1>El valor es false</h1> : <h1>Otra cosa</h1>} 
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        <button onClick={cambiarValor}>Cambiar valor</button>
    </div>
  )
}

export default Texto