import React from 'react';
import '../hojas-de-estilo/Pantalla.css'
//se puede definir un componente como funcion flecha, en este caso como solo retorna la estructura del componente y no va a tener funcionalidad, podemos poner esos componentes entre () sin usar {}.
const Pantalla = ({ input })=>(
  <div className='input'> 
    {input}
  </div>
);

export default Pantalla;