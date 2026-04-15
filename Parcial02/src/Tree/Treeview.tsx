import type { TreeNodeData } from "../Types/tree.types";

import { TreeNodeItem } from "../Tree/TreeNodeItem.tsx";

export const TreeView = ({ nodes }: { nodes: TreeNodeData[] }) => {
  const rootNodes = nodes.filter((n) => n.parentId === null);

  return (
    <div>
      {rootNodes.map((node) => (
        <TreeNodeItem key={node.id} node={node} nodes={nodes} />
      ))}
    </div>
  );
};