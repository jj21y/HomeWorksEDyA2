import React, { useState } from 'react';
import { MenuNode } from './types';

interface Props {
  node: MenuNode;
}

export const MenuItem = ({ node }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children.length > 0;

  return (
    <div style={{ marginLeft: '1.2rem', marginTop: '0.5rem' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        {/* Indicador visual de expansión */}
        {hasChildren ? (isOpen ? '▼' : '▶') : '•'}
        <span style={{ fontWeight: hasChildren ? 'bold' : 'normal' }}>
          {node.title}
        </span>
      </div>

      {/* Renderizado Recursivo (DFS)  */}
      {isOpen && hasChildren && (
        <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '5px' }}>
          {node.children.map((child, index) => (
            <MenuItem key={`${child.link}-${index}`} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};