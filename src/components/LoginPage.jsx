import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Home,
  LogIn,
  UserPlus,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import GlassCard from "./GlassCard";
import GlassInput from "./GlassInput";
import GlassButton from "./GlassButton";

// Login Page
const LoginPage = ({ setCurrentPage }) => (
  <div className="flex-1 flex items-center justify-center p-4">
    <GlassCard className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
          <LogIn className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-white/70">Sign in to your account</p>
      </div>

      <div className="space-y-6">
        <GlassInput
          icon={Mail}
          type="email"
          placeholder="Email address"
          required
        />

        <GlassInput
          icon={Lock}
          type="password"
          placeholder="Password"
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-white/70">
            <input type="checkbox" className="mr-2 accent-white/30" />
            Remember me
          </label>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <GlassButton variant="primary" className="w-full">
          Sign In
        </GlassButton>

        <div className="text-center">
          <span className="text-white/70">Don't have an account? </span>
          <button
            onClick={() => setCurrentPage("register")}
            className="text-white hover:underline font-medium"
          >
            Sign up
          </button>
        </div>
      </div>
    </GlassCard>
  </div>
);

export default LoginPage;
