import React from "react";
import MovingDotsBackground from "./components/MovingDotsBackground";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import VirusProtectionDashboard from "./components/VirusProtectionDashboard";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

import { Routes, Route, Navigate } from "react-router-dom";

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MovingDotsBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<VirusProtectionDashboard />} />
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
