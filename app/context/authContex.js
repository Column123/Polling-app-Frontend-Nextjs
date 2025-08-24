'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { refreshToken } from "@/utils/refreshTokenApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('username');
        const storedToken = localStorage.getItem('accessToken');

        if (storedUser && storedToken) {
          setUsername(storedUser);
          setAccessToken(storedToken);
          setIsAuthenticated(true);
        } else {
          try {
            const data = await refreshToken(); 
            login(data.username, data.accessToken);
          } catch (error) {
            console.error("Session refresh failed:", error);
            router.push('/Login-SignUp');
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []); // The empty dependency array ensures this runs only once

  const login = (userData, token) => {
    setUsername(userData);
    setAccessToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('username', userData);
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    setUsername(null);
    setAccessToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    router.push('/Login-SignUp');
  };

  const value = {
    username,
    accessToken,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};