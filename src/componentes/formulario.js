import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  function manejarSubmit(e) {
    e.preventDefault(); 
    window.alert(`Hola ${nombre}, ${mensaje}`);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={manejarSubmit}>
        
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

        <label htmlFor="mensaje">Mensaje :</label>
        <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
