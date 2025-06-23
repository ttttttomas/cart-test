'use client'
import { createContext, useContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

// Crear el contexto de usuario
const UserContext = createContext();

// Proveedor del contexto de usuario
export function UserProvider({ children }) {
  const { token, error } = useAuth();
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider value={{ user, error,token, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook para usar el contexto de usuario fácilmente
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
}
