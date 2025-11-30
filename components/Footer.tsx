export default function Footer() {
  return (
    <footer className="mt-28 py-10 bg-gradient-to-br from-white/80 to-slate-100/70 backdrop-blur-xl border-t border-slate-200 relative overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Footer Logo */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-400/40">
            <span className="text-white font-bold text-lg">C</span>
          </div>

          <div className="text-left">
            <span className="font-semibold text-slate-900 text-lg">Crowbar Circle</span>
            <div className="text-xs text-slate-500">Community Hub</div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-slate-600">
          © 2024 Crowbar Circle — Part of the Crowbar Connected Network
        </p>

        <p className="text-xs text-slate-500 mt-2">
          Empowering communities through collaboration & learning
        </p>
      </div>
    </footer>
  );
}
