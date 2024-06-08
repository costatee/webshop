"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {}, // no-op 
  loading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      } else {
        console.error("No token found");
        // setToken(null);
      }
    } catch (error) {
      console.error("Error getting token from local storage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const validateToken = async () => {
      if (!token) return;

      setLoading(true);
      try {
        const response = await fetch('http://localhost:3001/validate-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          const data = await response.json();
          if (!data.valid) {
            // Token is invalid, clear it
            setToken(null);
            localStorage.removeItem("token");
          }
        } else {
          throw new Error('Failed to validate token');
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        setToken(null);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};