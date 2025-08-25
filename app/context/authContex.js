'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { refreshToken } from "@/utils/accountApi";
import { logoutApi } from '@/utils/accountApi';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthenticating, IsAuthenticating] = useState(true);
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
            router.push('/LogIn-SignUp');
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        setIsAuthenticated(false);
      } finally {
        IsAuthenticating(false);
      }
    };

    initializeAuth();
  }, []); 

  const login = (userData, token) => {
    setUsername(userData);
    setAccessToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('username', userData);
    localStorage.setItem('accessToken', token);
  };

  const logout = async () => {
    try{
      const response = await logoutApi();
    }
    catch(error){
      console.log(error);
    }
    setUsername(null);
    setAccessToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
  };

  const value = {
    username,
    accessToken,
    login,
    logout,
    isAuthenticated,
    isAuthenticating,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
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