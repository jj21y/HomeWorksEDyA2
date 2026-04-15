import { AuthProvider } from "./Context/AuthContext"; 
import { TreeProvider } from "./Context/TreeContext"; 
import { Router } from "./app/router";

export const App = () => {
  return (
    <AuthProvider>
      <TreeProvider>
        <Router />
      </TreeProvider>
    </AuthProvider>
  );
};