import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, LogIn, UserPlus, Menu, X } from "lucide-react";
import GlassCard from "./GlassCard";

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home, to: "/home" },
    { id: "login", label: "Login", icon: LogIn, to: "/login" },
    { id: "register", label: "Register", icon: UserPlus, to: "/register" },
    {
      id: "dashboard",
      label: "Virus Protection",
      icon: UserPlus,
      to: "/dashboard",
    },
  ];

  return (
    <nav className="relative z-50">
      <GlassCard className="m-4 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">✨ GlassApp</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        )}
      </GlassCard>
    </nav>
  );
};

export default Navbar;
