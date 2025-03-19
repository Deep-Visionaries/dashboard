import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SignIn";
import { ContentPreview } from "./ContentPreview";
import TypingEffect from "./TypingEffect";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  return (
    <Router>
      <div className={`min-h-screen bg-black text-white font-mono`}>
        <header className="border-b border-neon-purple shadow-neon-purple shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/logo_magicconvertor.png" alt="Magic Converter Logo" className="w-10 h-10 neon-glow" />
              <h1 className="text-xl font-bold text-neon-blue">Magic Converter</h1>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shorts" element={<ContentPreview type="shorts" />} />
          <Route path="/ads" element={<ContentPreview type="ads" />} />
          <Route path="/analyze" element={<ContentPreview type="analyze" />} />
          <Route path="/app" element={<PrivateRoute><MainApp /></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/app" />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <div className="relative w-full h-[80vh] overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-neon-pink neon-glow">Magic Converter</h1>
        <TypingEffect text="Transform content effortlessly with AI-powered tools!" speed={50} />
      </div>
    </div>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/shorts" className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <img src="../short.jpeg" alt="YouTube Shorts" className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold group-hover:text-red-500 transition-colors duration-300">YouTube Shorts</h3>
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">View and analyze your YouTube Shorts performance.</p>
        </Link>

        <Link to="/ads" className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <img src="../ad.jpeg" alt="Google Ads" className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors duration-300">Google Ads</h3>
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Manage and optimize your Google Ads campaigns.</p>
        </Link>

        <Link to="/analyze" className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <img src="../pie.jpeg" alt="Analyze Content" className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold group-hover:text-green-500 transition-colors duration-300">Analyze Content</h3>
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Get insights and analytics on your content performance.</p>
        </Link>
      </div>
    </main>

    <footer className="border-t border-neon-blue mt-16 py-6 text-center text-neon-green">
      <p>Magic Converter © {new Date().getFullYear()}</p>
    </footer>
  </>
);

export default Home;
