import React from 'react';

function Tarjeta({ titulo, descripcion }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;