import React, { useState, useEffect, useCallback } from 'react';
import Tree from 'react-d3-tree';
import { ArbolBinario, Nodo } from './BinaryTree';

// 1. Tipado para la librería react-d3-tree
interface D3Node {
  name: string;
  children?: D3Node[];
}

export default function App() {
  const [tree] = useState(() => new ArbolBinario());
  const [treeData, setTreeData] = useState<D3Node | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const convertToD3Format = useCallback((node: Nodo | null): D3Node | null => {
    if (!node) return null;
    
    const d3Node: D3Node = {
      name: node.value.toString(),
      children: []
    };

    const izquierda = convertToD3Format(node.izquierda);
    const derecha = convertToD3Format(node.derecha);

    if (izquierda) d3Node.children?.push(izquierda);
    if (derecha) d3Node.children?.push(derecha);
    return d3Node;
  }, []);

  const refreshVisualTree = useCallback(() => {
    const formatted = convertToD3Format(tree.raiz);
    setTreeData(formatted);
  }, [tree, convertToD3Format]);

  useEffect(() => {
    const initialValues = [20, 10, 30, 5, 15, 25, 35];
    initialValues.forEach(num => tree.insert(num));
    refreshVisualTree();
  }, [tree, refreshVisualTree]);

  const handlePrintLogs = () => {
    console.log("In-Order:", tree.inOrder());
    console.log("Pre-Order:", tree.preOrder());
    console.log("Post-Order:", tree.postOrder());
  };

  const handleSearch = () => {
    const val = parseInt(searchValue);
    if (isNaN(val)) return alert("Ingresa un número válido");
    
    const found = tree.contains(val);
    alert(found ? `✅ El valor ${val} existe.` : `❌ El valor ${val} NO existe.`);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '20px', background: '#282c34', color: 'white' }}>
        <h2>Challenge 08: Visualizador de Árbol Binario</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handlePrintLogs}>Consola: Recorridos</button>
          <input 
            type="number" 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Valor a buscar..."
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </header>

      <main style={{ flexGrow: 1, background: '#f5f5f5', position: 'relative' }}>
        {treeData ? (
          <Tree 
            data={treeData} 
            orientation="vertical"
            translate={{ x: window.innerWidth / 2, y: 50 }}
            pathFunc="step"
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
          />
        ) : (
          <p style={{ textAlign: 'center', marginTop: '50px' }}>Cargando árbol...</p>
        )}
      </main>
    </div>
  );
}