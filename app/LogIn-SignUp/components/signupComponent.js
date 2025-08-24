'use client'
import { useState, useEffect } from "react";

export default function SignUp({toggleView}) {
    const[isLoaded,setIsLoaded] = useState(false);
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [matchPassword, setMatchPassword] = useState('');
    const [matchPasswordEqualToPassword, setMatchPasswordEqualToPassword] = useState(false);
   
    useEffect(()=>{
        setIsLoaded(true);
    },[])



    useEffect(() => {
        if (passwordInputValue || matchPassword)
            setMatchPasswordEqualToPassword(passwordInputValue === matchPassword);
        else
            setMatchPasswordEqualToPassword(false);
    }, [passwordInputValue, matchPassword]);
    const handlePasswordChange = (event) => {
        setPasswordInputValue(event.target.value);
    }
    const MatchPassowrd = (event) => {
        setMatchPassword(event.target.value);
    }

    const addUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const formValue = new form.value;
    }


    return (
        <div className="flex items-center justify-center min-h-screen font-sans"
        >
            <form
                className={`p-8 space-y-6 bg-white rounded-2xl shadow-2xl w-full max-w-md
                     ${isLoaded ? "opacity-100 animate-Slidedown" : "opacity-0"}
                    `}
                method="Post"
                
                onSubmit={addUser}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 mt-2">
                        Join us and start your journey today!
                    </p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="Name"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={handlePasswordChange}
                            id="password"
                            name="password"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="Confirm Password"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            onChange={MatchPassowrd}
                            id="Confirm Password"
                            name="Confirm Password"
                            className={`w-full px-4 py-2.5 border rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:border-transparent ${matchPassword
                                    ? matchPasswordEqualToPassword
                                        ? 'border-green-500 ring-green-500'
                                        : 'border-red-500 ring-red-500'
                                    : 'border-gray-300 focus:ring-indigo-500'
                                }`}
                        />
                        {matchPassword && (
                            <p
                                className={`mt-2 text-xs ${matchPasswordEqualToPassword ? 'text-green-600' : 'text-red-600'
                                    }`}
                            >
                                {matchPasswordEqualToPassword
                                    ? 'Passwords match!'
                                    : 'Passwords do not match.'}
                            </p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Sign Up
                </button>
                 <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => toggleView('login')}
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                >
                  Log in
                </button>
            </p>
            </form>
        </div>
    )
}