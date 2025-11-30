"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Hourglass } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const { user, signInWithCrowbar } = useAuth();

  // ✅ unwrap params (required in Next.js 14+)
  const params = use(props.params);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold text-slate-900">Login Required</h2>
          <p className="text-slate-600 mt-2">
            Please sign in with Crowbar SSO to access this community.
          </p>
          <button
            onClick={signInWithCrowbar}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold"
          >
            Login with Crowbar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Hourglass className="w-16 h-16 text-indigo-600 mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-4 capitalize">
          {params.slug} Community
        </h1>

        <p className="text-slate-600 text-lg">
          This community is launching soon. Stay tuned for discussions, events &
          collaborations!
        </p>

        <div className="mt-10 p-6 rounded-xl bg-white shadow border text-slate-700">
          🚀 <strong>Coming Soon</strong> — This section will host posts, events,
          challenges, and more.
        </div>
      </motion.div>
    </div>
  );
}
