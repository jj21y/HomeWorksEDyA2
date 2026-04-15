import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Config.ts"; 

export const loginService = (email: string, password: string) => signInWithEmailAndPassword (auth, email, password);
export const registerService = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const logOutService = () => signOut(auth);