'use client'
import { useState } from "react"
import { useAuth } from "../../context/authContex";
import { redirect, RedirectType } from 'next/navigation'
import Link from "next/link";

export function ConfirmationDialog({ isOpen, onClose, onConfirm, title, message }) {
    const {logout} = useAuth();
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 w-full max-w-sm border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-300 mb-6">{message}</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md text-white bg-slate-700 hover:bg-slate-600 transition-colors font-medium"
                    >
                        No
                    </button>
                    <button
                        onClick={ () => { logout(); onClose();} } 
                        className="px-4 py-2 rounded-md text-white bg-cyan-600 hover:bg-cyan-500 transition-colors font-medium"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export function NavComponentButton({ name, link }) { 
    return ( 
        <a href={link} className="text-slate-400 hover:text-white font-medium transition-colors">
            {name}
        </a>
    );
}
export  default function NavComponent({ navItems }) {
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const {isAuthenticated, username} = useAuth();

    const user = {
        name: username,
        avatarUrl: '/profile.jpg',
    };
    
    const LogoIcon = () => (
        <svg className="w-7 h-7 text-cyan-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.25 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
        </svg>
    );

    const handleLogout = () => {
        console.log("User logged out!");
        setIsDialogOpen(false);
    };

    return (
        <>
            <header className="bg-black/30 backdrop-blur-md sticky top-0 z-40 border-b border-slate-800 bg-gray-900">
                <nav className="container mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

            
                        <div className="flex-shrink-0">
                            <a href="#" className="text-2xl font-bold text-white flex items-center">
                                <LogoIcon />
                                PollWave
                            </a>
                        </div>

               
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            {navItems.map((item) => (
                                <NavComponentButton key={item.name} name={item.name} link={item.link} />
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            {user && (
                                <>
                                    <span className="text-white font-medium hidden sm:block">{user.name}</span>
                                    <img
                                        className="h-9 w-9 rounded-full object-cover ring-2 ring-offset-2 ring-offset-slate-900 ring-cyan-500"
                                        src={user.avatarUrl}
                                        alt="User avatar"
                                        onError={(e) => {; e.target.onerror = null; e.target.src='https://placehold.co/100x100/1e293b/ffffff?text=U'; }}
                                    />
                                    <button
                                        onClick={isAuthenticated ?  () => setIsDialogOpen(true) : () => redirect('/LogIn-SignUp', RedirectType.push)}
                                        className={`px-4 py-2 text-sm rounded-md text-white bg-slate-700  transition-colors font-medium
                                        ${isAuthenticated ? 'hover:bg-red-600' : 'hover:bg-cyan-600'}
                                        `}
                                    >
                                        {isAuthenticated ? 'Logout' : 'Login / Sign Up'}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleLogout}
                title="Confirm Logout"
                message="Are you sure you want to log out?"
            />
        </>
    );
};