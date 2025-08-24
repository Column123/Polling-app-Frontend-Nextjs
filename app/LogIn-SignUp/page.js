'use client';
import { useState } from 'react';
import LogIn from "./components/loginComponent"
import SignUp from "./components/signupComponent"


export default function Authentication() {
    const [view, setView] = useState('login');
    const toggleView = (newView) => {
        setView(newView);
    };

    return (
    <div className='bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 '>
        <div className="ml-4 mr-4">
        {view === 'login' ? <LogIn toggleView={toggleView} /> : <SignUp toggleView={toggleView} />}
        </div>
    </div>             
  
    );
}