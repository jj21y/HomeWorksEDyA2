import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage"; 
import { TreePage } from "../Pages/TreePage"; 
import { ProtectedRoute } from "./ProtectedRoute";


export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TreePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);