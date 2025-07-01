import React, { useState, useEffect } from "react";
import MovingDotsBackground from "./components/MovingDotsBackground";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // comment this code if you want to use renderePage()
  const navigate = useNavigate();
  useEffect(() => {
    if (currentPage) {
      navigate(`/${currentPage}`);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case "register":
        return <RegisterPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MovingDotsBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* {renderPage()} */}

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="*"
            element={
              <div className="flex-1 flex items-center justify-center text-white text-2xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
