import React from 'react';  

import ReactDOM from 'react-dom/client';
// import App from './App'  -- > //Componente importado con la priemra forma desde App.js

import App from './App'   
// import {Otra} from './App' ===> Export nombrado. Puede ir en la misma línea que App. 

import './main.css' //IMPORTO LA HOJA DE ESTILOS de forma global, sin necesidad de poner "from"
//{Otra} entre llaves porque App ya es la que puse por default

const root = ReactDOM.createRoot(document.getElementById('root')); //Método create Root: busco el div del index para crear la raíz y empezar mi app

root.render(<App />);  //iMPORTANTE: React utiliza este nuevo método para invocar a una función, distinto a JS Vanilla
//Estos componentes inician con la primera letra en mayúscula
//Método render, para renderizar nuestra app 
