import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-qijUL5kJGStgawUo1gsr-RtIaKgDhco",
  authDomain: "file-system-tree-app.firebaseapp.com",
  projectId: "file-system-tree-app",
  storageBucket: "file-system-tree-app.firebasestorage.app",
  messagingSenderId: "1031386280169",
  appId: "1:1031386280169:web:a505b7c15e8f0a18ed0078"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);