import { TreeNode } from "../DataForm/TreeNode";

export const TreeNodeItem = ({ node }: { node: TreeNode }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <p>
        {node.type === "folder" ? "📁" : "📄"} {node.name}
      </p>

      {node.children.map((child) => (
        <TreeNodeItem key={child.id} node={child} />
      ))}
    </div>
  );
};