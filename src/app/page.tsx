"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function login() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    router.push("/dashboard");
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#b5d685]">
        <h1>LOGIN</h1>
        <p>✨Welcome back! please login your account to continue...</p>
        <form onSubmit = {handleSubmit} className="mt-8 space-y-6 w-full max-w-md">
          <div className="card">
            <div className="mb-4">
              <label className=" block text-gray-700 text-m font-bold mb-2" htmlFor="Username"> Email</label>
              <input
                type ="text"
                id="Username"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="Password">Password</label>
              <input
                type="password"
                id="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit">
                Login
            </button>
          </div>
        </form>
      </div>
  )
}