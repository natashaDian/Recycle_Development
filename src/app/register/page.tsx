"use client";

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    // Perform any registration logic here (e.g., API call)
    router.push("/"); // Navigate to the login page ("/" is the default login page)
  }; 
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#b5d685]">
        <h1>REGISTER</h1>
        <p>✨Create your account to get started!</p>
        <form className="mt-8 space-y-6 w-full max-w-md" onSubmit={handleRegister}>
          <div className="bg-amber-50 h-110 rounded-2xl shadow-md p-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-m font-bold mb-2"
                htmlFor="Username"
              >
                Username
              </label>
              <input
                type="text"
                id="Username"
                placeholder="Enter your username"
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-50"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-m font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="Enter your email"
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-50"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-m font-bold mb-2"
                htmlFor="Password"
              >
                Create Password
              </label>
              <input
                type="password"
                id="Password"
                placeholder="Enter your password"
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-m font-bold mb-2"
              htmlFor="phone">
              Phone Number
              </label>
              <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              pattern="[0-9]*"
              inputMode="numeric"
              />
            </div>
            <button
              type="submit"
              className="hover:shadow-xl hover:-translate-y-1 mt-2 ml-68 w-32  
                         bg-[#b5d685] hover:bg-gray-800 text-white font-bold py-2 
                         px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-50"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }