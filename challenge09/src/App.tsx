import React from 'react';
import { MenuItem } from './MenuItem';
import { sidebarData } from './MenuData';
function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial' }}>
      {/* Sidebar - Challenge 09 Punto 3  */}
      <aside style={{ width: '260px', backgroundColor: '#f9f9f9', padding: '20px', borderRight: '1px solid #eee' }}>
        <h3>Menú Lateral</h3>
        <nav>
          {sidebarData.map((item) => (
            <MenuItem key={item.id} node={item} />
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ padding: '40px', flexGrow: 1 }}>
        <h1>Challenge 09: Árbol N-ario</h1>
        <p>Navega a través del menú lateral recursivo.</p>
      </main>
    </div>
  );
}

export default App;