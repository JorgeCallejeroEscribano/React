import React from "react";

const Boton = ({ color, text, alert }) => {

  return (
    <button style={{ backgroundColor: color }} onClick={() => window.alert(alert)}>
      {text}
    </button>
  );

};

export default Boton;
