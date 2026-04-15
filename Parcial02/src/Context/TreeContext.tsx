import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { TreeNodeData, NodeType } from "../Types/tree.types"; 
import { NaryTree } from "../data-structure/NaryTree";
import {
  getNodesService,
  addNodeService,
  deleteNodeService,
} from "../firebase/tree.service";
import { useAuth } from "./AuthContext";

interface Props {
  nodes: TreeNodeData[];
  createNode: (name: string, type: NodeType, parentId: string | null) => Promise<void>;
  deleteNode: (node: TreeNodeData) => Promise<void>;
}

const TreeContext = createContext<Props | null>(null);

export const TreeProvider = ({ children }: { children: ReactNode }) => {
  const [tree, setTree] = useState<NaryTree>(new NaryTree());
  const { user } = useAuth();

const loadNodes = async () => {
  const data = await getNodesService();

  const newTree = new NaryTree();
  newTree.buildTree(data);

  setTree(newTree);
};

  useEffect(() => {
    loadNodes();
  }, []);

  const createNode = async (
    name: string,
    type: NodeType,
    parentId: string | null
  ) => {
    if (!user) throw new Error("Not authenticated");

    await addNodeService({
      name,
      type,
      parentId,
      createdByEmail: user.email,
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    });

    await loadNodes();
  };

  const deleteNode = async (node: TreeNodeData) => {
    if (!user || user.email !== node.createdByEmail) {
      throw new Error("Unauthorized");
    }

    await deleteNodeService(node.id);
    await loadNodes();
  };

  return (
    <TreeContext.Provider value={{ tree, createNode, deleteNode }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTreeContext = () => {
  const ctx = useContext(TreeContext);
  if (!ctx) throw new Error("useTreeContext must be used inside provider");
  return ctx;
};