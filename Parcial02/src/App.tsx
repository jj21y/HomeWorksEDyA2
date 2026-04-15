import { AuthProvider } from "./Context/AuthContext"; 
import { TreeProvider } from "./Context/TreeContext"; 
import { Router } from "./App/router";

export const App = () => {
  return (
    <AuthProvider>
      <TreeProvider>
        <Router />
      </TreeProvider>
    </AuthProvider>
  );
};