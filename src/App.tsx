// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/SignIn";
import { ContentPreview } from "./component/ContentPreview";
import TypingEffect from "./component/TypingEffect";
import HomePage from "./component/HomePage";
import Modal from "./component/Modal"; // Import the Modal component

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

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

  const handleMainSectionClick = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      setShowLoginDialog(true);
    }
  };

  const closeDialog = () => {
    setShowLoginDialog(false);
  };

  const openModal = (title) => {
    setModalContent({ title, content: `Learn more about topic. Sign in to get full access.` });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <div className={`min-h-screen bg-black text-white font-mono`} onClick={handleMainSectionClick}>
        <header className="border-b border-neon-purple shadow-neon-purple shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/logo_magicconvertor.png" alt="Magic Converter Logo" className="w-10 h-10 neon-glow" />
              <h1 className="text-xl font-bold text-neon-blue">Magic Converter</h1>
            </div>
            
          </div>
        </header>

        {/* MODAL for Login Prompt */}
        {showLoginDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96 relative" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-xl font-bold mb-4">Login Required</h2>
              <p className="mb-4">Please log in to continue.</p>
              <div className="flex justify-end gap-3">
                <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={closeDialog}>
                  Close
                </button>
                <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={closeDialog}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Card Click */}
        <Modal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          title={modalContent.title} 
          content={modalContent.content} 
        />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/app" element={<PrivateRoute><MainApp openModal={openModal} /></PrivateRoute>} />
          <Route path="/shorts" element={<ContentPreview type="shorts" />} />
          <Route path="/ads" element={<ContentPreview type="ads" />} />
          <Route path="/analyze" element={<ContentPreview type="analyze" />} />
          <Route path="/" element={<Navigate to="/app" />} />
        </Routes>
      </div>
    </Router>
  );
}

const MainApp = ({ openModal }) => (
  <>
    {/* <div className="relative w-full h-[80vh] overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-neon-pink neon-glow">Magic Converter</h1>
        <TypingEffect text="Transform content effortlessly with AI-powered tools!" speed={50} />
      </div>
    </div> */}

<div className="flex justify-center items-center h-screen">
    <h1 className="text-white text-6xl">Welcome Everybody!!</h1>
</div>






    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300" onClick={() => openModal("Youtuble Shorts")}>
          <img src="../short.jpeg" alt="YouTube Shorts" className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold group-hover:text-red-500 transition-colors duration-300">YouTube Shorts</h3>
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">View and analyze your YouTube Shorts performance.</p>
        </div>

        <div className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300" onClick={() => openModal("Google Ads")}>
          <img src="../ad.jpeg" alt="Google Ads" className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors duration-300">Google Ads</h3>
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Manage and optimize your Google Ads campaigns.</p>
        </div>

        <div className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300" onClick={() => openModal("Analyze Content")}>
          <img src="../pie.jpeg" alt="Analyze Content" className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold group-hover:text-green-500 transition-colors duration-300">Analyze Content</h3>
          <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Get insights and analytics on your content performance.</p>
        </div>
      </div>
    </main>
  </>
);

export default App;
