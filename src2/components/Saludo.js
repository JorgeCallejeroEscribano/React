import React from 'react';

function Saludo(props) {


/*  •	Define un componente funcional llamado Saludo.
	•	props:
	•	Es un objeto que contiene las propiedades pasadas al componente desde el padre.
	•	En este caso, esperamos que el componente reciba una propiedad llamada nombre cuando sea utilizado.

  */

  return <h1>¡Hola, {props.nombre}!</h1>;

  /*
	•	Este es el retorno del componente, que define lo que se renderizará en la interfaz.
	•	<h1>:
	•	Renderiza un encabezado de nivel 1 en HTML.
	•	El texto dentro del encabezado incluye:
	•	La cadena estática: ¡Hola, 
	•	Una interpolación de JavaScript: {props.nombre}, que inyecta el valor de la propiedad nombre pasada al componente.
*/
}

export default Saludo;