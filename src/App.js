import './App.css';
import freeCodeCampLogo from './imagenes/fcc_primary_large.svg';
import Boton from './Componentes/Boton';
import './hojas-de-estilo/Boton.css';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
function App() {

  const [input, setInput] = useState('');


  const agregarInput = val =>{
    if((input.endsWith('.') || input.endsWith('+') || input.endsWith('-') || input.endsWith('*') || input.endsWith('/')) && isNaN(parseInt(val))){
      console.log('no puedes usar 2 operadores seguidos');
    } else{
      setInput(input + val);
    }
  };

  const calcularResultado = () =>{
    if (input){               //las strings, si estan vacías por defecto son falsas, y si estan con algun caracter son verdaderas.
      setInput(evaluate(input));
    } else{
      alert('ingrese valores para realizar la operación')
    }
  };


  return (
    <div className="App">
      <div
      className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
