'use client'
import { useState, useEffect } from "react";
import { logInApi } from "@/utils/logInApi";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/authContex";



export default function LogIn({ toggleView }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { accessToken, login, isAuthenticated } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if(isAuthenticated){
      router.replace('/Home');
    }
    setIsLoaded(true);
  }, [])

  const verifyUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const form = event.target;
    const Email = form.Email.value;
    const password = form.password.value;

    try {
      const response = await logInApi(Email, password);

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        login(result.username, result.accessToken);
        // Handle successful login here (e.g., redirect or update app state)
        router.replace('/Home');

      } else if (response.status === 401 || response.status === 403) {
        const result = await response.json();
        setError(result.error);
      }
      else {
        setError('Something went wrong. Please try again later.');
      }
    } catch (err) {

      console.error("Login API call failed:", err);
      setError('Something went wrong. Please try again later.');
    } finally {
      // 5. Set loading back to false after the API call is complete
      setIsLoading(false);
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen font-sans bg-gray-50">
      <form
        className={`p-8 space-y-6  rounded-2xl shadow-2xl w-full max-w-md transition-opacity duration-700 ${isLoaded ? "opacity-100 animate-Slidedown" : "opacity-0"}`}
        method="post"
        onSubmit={verifyUser}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Login
          </h2>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-800 bg-red-100 border border-red-200 rounded-lg" role="alert">
            <span className="font-medium">Login failed:</span> {error}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
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
            id="password"
            name="password"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => toggleView('signup')}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  )
}