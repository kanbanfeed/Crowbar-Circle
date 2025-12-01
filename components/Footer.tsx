export default function Footer() {
  return (
    <footer className="w-full py-14 mt-28 relative bg-gradient-to-br from-[#141128] via-[#1A1535] to-[#0F0C20] border-t border-white/5 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Logo Block */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-bold text-lg tracking-tight">CB</span>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">Crowbar Circle</p>
            <p className="text-sm text-slate-400 -mt-1">Community Hub</p>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="text-center md:text-right">
          <p className="text-sm text-white font-medium">
            © 2025 Crowbar Connected Network
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Empowering Creators • Unified Ecosystem • Growth Engine
          </p>
        </div>

      </div>
    </footer>
  );
}
