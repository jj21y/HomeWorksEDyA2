export type NodeType = "folder" | "file";

export class TreeNode {
  id: string;
  name: string;
  type: NodeType;
  parentId: string | null;
  createdByEmail: string;
  children: TreeNode[];

  constructor({
    id,
    name,
    type,
    parentId,
    createdByEmail,
  }: {
    id: string;
    name: string;
    type: NodeType;
    parentId: string | null;
    createdByEmail: string;
  }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.parentId = parentId;
    this.createdByEmail = createdByEmail;
    this.children = [];
  }

  isFolder(): boolean {
    return this.type === "folder";
  }

  isFile(): boolean {
    return this.type === "file";
  }

  addChild(node: TreeNode): void {
    if (!this.isFolder()) {
      throw new Error("Cannot add children to a file");
    }

    this.children.push(node);
  }
}