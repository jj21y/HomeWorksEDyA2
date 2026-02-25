import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import PrintMessage from './PrintMessage';
import PrintNumber from './PrintNumber';
import Contador from './Contador'
import Arrays from './Arrays'
import Arreglos from './Arreglos';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelloWorld />
    <PrintMessage message = "You shall not pass" />
    <PrintMessage message = "Testeo" />
    <PrintNumber number = '100'/>
    <Contador initialValue = {5}/>
    <Arrays/>
    <Arreglos/>
  </React.StrictMode>
)
