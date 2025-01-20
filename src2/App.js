import React from 'react';
import Saludo from './components/Saludo';
import Lista from './components/Lista';
import Contador from './components/Contador';
import Tarjeta from './components/Tarjeta';

function App() {
  // Datos para la lista
  const nombres = ['Ana', 'Luis', 'Carlos'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Ejemplo de Aplicación React</h1>
      
      {/* Componente Saludo */}
      <section>
        <h2>Saludo</h2>



            <Saludo nombre="React" />
        <Saludo nombre="Juan" />
      </section>
      
      <hr />

      {/* Componente Lista */}
      <section>
        <h2>Lista de Nombres</h2>
        <Lista items={nombres} />
      </section>
      
      <hr />

      {/* Componente Contador */}
      <section>
        <h2>Contador Interactivo</h2>
        <Contador />
      </section>
      
      <hr />

      {/* Componente Tarjeta */}
      <section>
        <h2>Tarjetas</h2>
        <Tarjeta
          titulo="Primera Tarjeta"
          descripcion="Esta es una tarjeta de ejemplo con información interesante."
        />
        <Tarjeta
          titulo="Segunda Tarjeta"
          descripcion="Otra tarjeta que muestra datos relevantes."
        />
        <h4>hola jorge</h4>
      </section>
    </div>
  );
}

export default App;