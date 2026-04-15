import { useTreeContext } from "../Context/TreeContext"; 
import { useAuth } from "../Context/AuthContext";
import { canEditNode } from "../Utils/permisos"; 
import type { TreeNodeData } from "../Types/tree.types";

export const NodeActions = ({ node }: { node: TreeNodeData }) => {
  const { deleteNode } = useTreeContext();
  const { user } = useAuth();

  const canEdit = canEditNode(user, node);

  return (
    <>
      {canEdit && (
        <button onClick={() => deleteNode(node)}>Delete</button>
      )}
    </>
  );
};