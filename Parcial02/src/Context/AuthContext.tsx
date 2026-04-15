import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "../types/auth.types";
import {
  loginService,
  registerService,
  logoutService,
} from "../firebase/auth.service";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

interface Props {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<Props | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email || "",
      });
    } else {
      setUser(null);
    }
  });

  return () => unsubscribe();
}, []);

  const login = async (email: string, password: string) => {
    const res = await loginService(email, password);
    const u = { uid: res.user.uid, email: res.user.email! };

    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
  };

  const register = async (email: string, password: string) => {
    const res = await registerService(email, password);
    const u = { uid: res.user.uid, email: res.user.email! };

    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
  };

  const logout = async () => {
    await logoutService();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside provider");
  return ctx;
};