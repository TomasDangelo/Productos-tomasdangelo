import React, {useState} from 'react'

const Counter = () => {
                                          //Posición inicial: 0 / Buena práctica de siempre poner valor inicial relacionado al Estado
    const [count, setCount] = useState(0)  //Desestructurado / 1º valor: valor inicial, 2º valor: función
                                            // Siempre debe estar arriba, no puede estar dentro de un bloque de código
    let tope = 10
                                            
    const sumar = () =>{    //Llamado a la función, recordar que no se puede mutar el estado //Si hicieramos count = count + 1  o count++ sería mutarlo, y no funcionaría, porque sería mutar el estado
        count < tope ? setCount(count + 1) :  alert("Máximo stock")          
// &&
// count < tope && setCount(count + 1)                 // También podríamos hacer un if&else pero seria mas ineficiente
      
}                                                                                         
    const restar = () =>{
        setCount(count - 1)
    }

  return (
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>

        <p>Count {count}</p>
    </div>
  )
}

export default Counter