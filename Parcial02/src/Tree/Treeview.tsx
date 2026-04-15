import { TreeNodeItem } from "../Tree/TreeNodeItem.tsx";
import { NaryTree } from "../DataForm/NaryTree.ts";

export const TreeView = ({ tree }: { tree: NaryTree }) => {
  return (
    <div>
      {tree.rootNodes.map((node) => (
        <TreeNodeItem key={node.id} node={node} />
      ))}
    </div>
  );
};