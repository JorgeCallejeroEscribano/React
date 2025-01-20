import React from 'react';

function Lista({ items }) {
  return (
    <ul>
      {items.map((item, index) => (

        /*
            •	items.map: Recorre cada elemento del array items pasado como prop.
	          •	item: Representa el valor actual del elemento dentro del array.
	          •	index: Representa la posición del elemento actual en el array.
	          •	Por cada elemento del array, React generará un elemento <li> (línea siguiente).
        */

        <li key={index}>{item}</li>

        /*
          •	<li>: Crea un elemento de lista.
          •	key={index}:
          •	React utiliza la prop key para identificar cada elemento en listas dinámicas. Esto ayuda a React a optimizar el renderizado.
          •	Aquí usamos index como clave, aunque es preferible usar un identificador único si está disponible.
          •	{item}:
          •	Inserta el valor actual del elemento del array (por ejemplo, “Item 1”) en el contenido de la etiqueta <li>.
        */

      ))}
    </ul>
  );
}

export default Lista;