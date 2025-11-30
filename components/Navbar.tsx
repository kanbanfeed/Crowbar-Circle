"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, signInWithCrowbar, signOutUser } = useAuth();

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "Communities", href: "/communities" },
  ];

  return (
    <header className="fixed top-0 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm z-50">
      
      {/* Soft Aura Glow */}
      <div className="absolute inset-x-0 -top-6 h-10 bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-pink-500/25 blur-2xl pointer-events-none"></div>

      <div className="relative w-full px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-400/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold tracking-wide">CC</span>
            </div>

            <div>
              <div className="font-bold text-lg tracking-tight group-hover:text-slate-900 transition">
                Crowbar Circle
              </div>
              <p className="text-xs text-slate-500 -mt-1">Community Hub</p>
            </div>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          {navItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={item.href}
                className="relative text-slate-600 hover:text-slate-900 font-medium transition"
              >
                {item.label}

                {/* animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Auth Buttons */}
          {!user ? (
            <motion.button
              onClick={signInWithCrowbar}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" /> Login with Crowbar
            </motion.button>
          ) : (
            <motion.button
              onClick={signOutUser}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 shadow-sm hover:bg-slate-100 hover:shadow transition flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Logout
            </motion.button>
          )}
        </nav>
      </div>
    </header>
  );
}
