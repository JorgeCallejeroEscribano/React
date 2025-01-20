import React, { useState } from 'react';

/*
	•	import React: Importa la biblioteca React, que es necesaria para usar JSX 
    (el lenguaje de plantillas que parece HTML) y otras funciones de React.
	•	{ useState }: Es un hook de React que permite a los componentes funcionales manejar estado. 
    Los hooks son funciones especiales que añaden funcionalidades como el estado o efectos secundarios a los componentes funcionales.
*/

function Contador() {
  const [contador, setContador] = useState(0);

  /*
	•	useState(0):
	•	Crea un estado local llamado contador y lo inicializa con el valor 0.
	•	useState devuelve un array con dos elementos:
	1.	contador: La variable que contiene el valor actual del estado.
	2.	setContador: Una función para actualizar el valor de contador.
  */

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;