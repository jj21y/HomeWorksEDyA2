import { TreeNode } from "./TreeNode";
import type { TreeNodeData } from "../Types/tree.types"; 

export class NaryTree {
  rootNodes: TreeNode[];

  constructor() {
    this.rootNodes = [];
  }


  buildTree(nodes: TreeNodeData[]): void {
    const map = new Map<string, TreeNode>();


    nodes.forEach((n) => {
      map.set(
        n.id,
        new TreeNode({
          id: n.id,
          name: n.name,
          type: n.type,
          parentId: n.parentId,
          createdByEmail: n.createdByEmail,
        })
      );
    });


    map.forEach((node) => {
      if (node.parentId === null) {
        this.rootNodes.push(node);
      } else {
        const parent = map.get(node.parentId);
        parent?.addChild(node);
      }
    });
  }


  findNode(id: string, nodes = this.rootNodes): TreeNode | null {
    for (const node of nodes) {
      if (node.id === id) return node;

      const found = this.findNode(id, node.children);
      if (found) return found;
    }

    return null;
  }


  insert(parentId: string | null, newNode: TreeNode): void {
    if (parentId === null) {
      this.rootNodes.push(newNode);
      return;
    }

    const parent = this.findNode(parentId);

    if (!parent) {
      throw new Error("Parent not found");
    }

    if (!parent.isFolder()) {
      throw new Error("Cannot insert into a file");
    }

    parent.addChild(newNode);
  }

  delete(id: string, nodes = this.rootNodes): boolean {
    const index = nodes.findIndex((n) => n.id === id);

    if (index !== -1) {
      nodes.splice(index, 1);
      return true;
    }

    for (const node of nodes) {
      const deleted = this.delete(id, node.children);
      if (deleted) return true;
    }

    return false;
  }

  dfs(callback: (node: TreeNode) => void, nodes = this.rootNodes) {
    for (const node of nodes) {
      callback(node);
      this.dfs(callback, node.children);
    }
  }
}