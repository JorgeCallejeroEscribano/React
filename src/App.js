import React from 'react';
import  Boton  from './componentes/boton';
import Formulario from './componentes/formulario';
import Galeria from './componentes/galeria';
import Contador from './componentes/contador';





const App = () => {
  

  const images = [
    require('./img1.jpg'),
    require('./img2.jpg') 
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>Ejercicio 1</h1>
      <Boton color='blue' text='Haz clic aquí' alert='Hola jorge' />   
      <Boton color='red' text='Hola' alert='centollo' />   

      <h1>Ejercicio 2</h1>
      <Formulario/>
      <h1>Galeria</h1>
      <Galeria img={images}/>
      <Contador/>
    </div>
  );
};

export default App;
