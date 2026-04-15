export type NodeType = 'folder' | 'file';

export interface TreeNodeData {
    id: string;
    name: string;
    type: NodeType;
    parentId: string | null;
    createdByEmail: string;
    createdAt: string;
    updateAt: string;
}