import type { AuthUser } from "../types/auth.types";
import type { TreeNodeData } from "../Types/tree.types";

export const canEditNode = (
  user: AuthUser | null,
  node: TreeNodeData
) => {
  return user?.email === node.createdByEmail;
};