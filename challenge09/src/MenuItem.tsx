import React, { useState } from 'react';
import { IMenuNode } from './types';

export const MenuItem = ({ node }: { node: IMenuNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: '15px', marginTop: '10px' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        {hasChildren ? (isOpen ? '▼' : '▶') : '•'}
        <span>{node.title}</span>
      </div>

      {isOpen && hasChildren && (
        <div style={{ borderLeft: '1px solid #ddd', marginLeft: '5px' }}>
          {node.children!.map((child) => (
            <MenuItem key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};