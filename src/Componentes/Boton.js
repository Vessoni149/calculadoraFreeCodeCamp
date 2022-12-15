import React from 'react';

function Boton(props){
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
    //esto retorna true o false, si el valor no es un numero, un punto o un = se considerara true, o sea que es operador.
    };
  return(
      <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
  );
}
export default Boton;

//el prop children viene a ser el contenido interno del componente como etiqueta. Requiere que haya etiqueta de apertura y de cierre en el componente. Ej: <Boton> esto sería el valor de props.children </Boton>

//en el nombre de la clase, creamos una funcion para que se asigne un nombre segun si el boton contiene un operador o no. La funcion esOperador tiene como parametro el children que seria el contenido del boton. Si éste es un operador la clase será 'operador' si no lo es sera null, o sea no tendrá clase adicional.

//para llamar a la funcion onClick hay que escribir una funcion que retorne a la otra funcion. La funcion no tiene nombre, es anonima y solo retorna el resultado de llamar a la segunda funcion.
//Esto sucede porque sin esa funcion anonima, solo estamos llamando a la funcion manejarClic.
//el evento onClick espera una funcion como valor, no una llamada a una funcion.