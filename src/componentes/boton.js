import React from "react";
//HOLA JUANAN fssdlhaflñg

const Boton = ({ color, text, alert }) => {

  return (
    <button style={{ backgroundColor: color }} onClick={() => window.alert(alert)}>
      {text}
    </button>
  );

};

export default Boton;
