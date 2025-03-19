import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Signup error", err);
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Navbar */}
      <nav className={`fixed w-full top-0 p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold">Magic Convertor</h1>
          <button onClick={() => setDarkMode(!darkMode)} className={`px-4 py-2 rounded-lg ${darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"}`}>
            {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
          </button>
        </div>
      </nav>

      {/* Signup Form */}
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className={`max-w-md p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className={`mt-1 block w-full border rounded-md p-2 ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"}`} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={`mt-1 block w-full border rounded-md p-2 ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"}`} />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Sign Up</button>
          </form>
          <p className="mt-4 text-center">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;


