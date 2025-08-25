'use client';
import { useState, useEffect } from 'react';
import LogIn from "./components/loginComponent"
import SignUp from "./components/signupComponent"
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContex";
import LoadingSpinner from "../components/loadingComponent";

export default function Authentication() {
    const [view, setView] = useState('login');
    const { isAuthenticated, isAuthenticating } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/Home');
        }
    })
    const toggleView = (newView) => {
        setView(newView);
    };
    
    if (isAuthenticating || isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-4 font-sans">
                <LoadingSpinner />
            </div>
        );
    }
    return (
        <div className='bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 '>
            <div className="ml-4 mr-4">
                {view === 'login' ? <LogIn toggleView={toggleView} /> : <SignUp toggleView={toggleView} />}
            </div>
        </div>

    );
}