import React from 'react';
import { MenuItem } from './MenuItem';
import { rootMenu } from './MenuData';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Sidebar - Challenge 09  */}
      <aside style={{ 
        width: '280px', 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRight: '1px solid #ececec' 
      }}>
        <h2 style={{ fontSize: '1.1rem', color: '#333' }}>Menú Navegación</h2>
        <nav>
          {/* Empezamos imprimiendo los hijos de la raíz */}
          {rootMenu.children.map((item, index) => (
            <MenuItem key={index} node={item} />
          ))}
        </nav>
      </aside>

      {/* Área de Contenido Principal */}
      <main style={{ padding: '40px', flexGrow: 1 }}>
        <h1>Reto 09: Sidebar con Árbol N-ario</h1>
        <hr />
        <p>Selecciona las flechas en el menú para desplegar los sub-nodos.</p>
      </main>
    </div>
  );
}

export default App;