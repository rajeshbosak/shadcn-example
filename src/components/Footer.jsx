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
import GlassButton from "./GlassButton";

// Footer Component
const Footer = () => (
  <footer className="relative z-50 mt-auto">
    <GlassCard className="m-4 px-6 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">✨ GlassApp</h3>
          <p className="text-white/70">
            Experience the future of web design with our liquid glass interface
            and mesmerizing particle effects.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <div className="space-y-2">
            <a
              href="#"
              className="block text-white/70 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <GlassButton variant="ghost" className="p-3">
              <Github className="w-5 h-5" />
            </GlassButton>
            <GlassButton variant="ghost" className="p-3">
              <Twitter className="w-5 h-5" />
            </GlassButton>
            <GlassButton variant="ghost" className="p-3">
              <Linkedin className="w-5 h-5" />
            </GlassButton>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
        <p>
          &copy; 2025 GlassApp. All rights reserved. Made with ✨ and React.
        </p>
      </div>
    </GlassCard>
  </footer>
);

export default Footer;
