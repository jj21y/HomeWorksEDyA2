import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config";
import type { TreeNodeData } from "../Types/tree.types";

const COLLECTION  = 'node';
export const addNodeService = async (node: Omit<TreeNodeData, 'id'>) => {
    await addDoc(collection(db,COLLECTION))
};

export const getNodesService = async (): Promise<TreeNodeData[]> => {
    const snapshot = await getDocs(collection(db, COLLECTION));

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<TreeNodeData, 'id'>),
    }))
};

export const deleteNodeService = async (id: string) => {
    await deleteDoc(doc(db,COLLECTION, id))
};