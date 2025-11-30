"use client";

import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Globe,
  Sparkles,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";

export default function CommunityLanding() {
  const { user, signInWithCrowbar } = useAuth();

  const categories = [
    {
      name: "Tech Innovators",
      slug: "tech",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
    },
    {
      name: "Career Builders",
      slug: "career",
      icon: <Users className="w-10 h-10 text-purple-600" />,
    },
    {
      name: "Eco Warriors",
      slug: "eco",
      icon: <Sparkles className="w-10 h-10 text-green-600" />,
    },
    {
      name: "Wellness Tribe",
      slug: "wellness",
      icon: <HeartHandshake className="w-10 h-10 text-rose-600" />,
    },
    {
      name: "Global Community",
      slug: "global",
      icon: <MessageCircle className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 pb-28 pt-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200 text-sm text-slate-700 shadow-sm mb-6"
        >
          Crowbar Connected Network
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Welcome to
          <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            Crowbar Circle
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Explore niche communities, share ideas, collaborate, and grow together.
          Built exclusively for the Crowbar members.
        </p>

        {/* LOGIN CTA */}
        {!user && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={signInWithCrowbar}
            className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Login to Access Communities
          </motion.button>
        )}
      </motion.div>

      {/* COMMUNITY GRID */}
      {user && (
        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-10 rounded-3xl bg-white/80 backdrop-blur-lg border border-slate-200 shadow-md hover:shadow-xl cursor-pointer transition relative overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-xl transition"></div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">{c.icon}</div>

              {/* Name */}
              <h3 className="relative z-10 text-xl font-semibold text-slate-900 mb-3">
                {c.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-600 mb-6">
                Connect with like-minded members of the Crowbar network.
              </p>

              {/* Button */}
              <Link
                href={`/category/${c.slug}`}
                className="relative z-10 inline-block px-4 py-2 w-full text-center rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
              >
                Explore
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
