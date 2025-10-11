import { createContext, useState, useContext } from "react";

// 1. Crear el contexto
export const AuthContext = createContext();

// 2. Crear el Proveedor del Contexto
export const AuthProvider = ({ children }) => {
    // Estado para simular si el usuario está autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Funciones para simular el inicio y cierre de sesión
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
