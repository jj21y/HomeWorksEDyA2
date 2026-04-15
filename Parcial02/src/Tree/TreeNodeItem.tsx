import type { TreeNodeData } from "../Types/tree.types";
import { NodeActions } from "./NodeActions";

export const TreeNodeItem = ({
  node,
  nodes,
}: {
  node: TreeNodeData;
  nodes: TreeNodeData[];
}) => {
  const children = nodes.filter((n) => n.parentId === node.id);

  return (
    <div style={{ marginLeft: "20px" }}>
      <p>
        {node.type === "folder" ? "📁" : "📄"} {node.name}
      </p>

      <NodeActions node={node} />

      {node.type === "folder" &&
        children.map((child) => (
          <TreeNodeItem key={child.id} node={child} nodes={nodes} />
        ))}
    </div>
  );
};