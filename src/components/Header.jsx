import { Search, Bell, User } from "lucide-react";

export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <div className="relative group">
              <img
                src="/Gemini_Generated_Image_8snd7h8snd7h8snd-removebg-preview.png"
                alt="MatchPulse Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-contain shadow-lg transition-transform duration-300 group-hover:scale-105 bg-background/30"
              />
              <span className="absolute -bottom-1 -right-1 bg-gradient-to-r from-primary to-primary/85 text-background text-[10px] md:text-xs px-2 py-1 rounded-md shadow-md font-semibold animate-pulse">
                Live
              </span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                Match<span className="text-primary" style={{ animation: 'pulse 1.2s ease-in-out infinite' }}>Pulse</span>
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                Live Fußball-Ergebnisse & Stats
              </p>
            </div>
          </div>

          {/* Search Bar - Centered */}
          <div className="flex-1 max-w-2xl mx-4 md:mx-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Search className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground/80 ml-4 transition-colors group-focus-within:text-primary group-hover:text-primary" />
              </div>
              <input
                type="text"
                placeholder="Team, Liga oder Spiel suchen..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-12 pr-4 py-2.5 md:py-3 bg-background/50 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 placeholder:text-muted-foreground/70 text-sm md:text-base transition-all duration-200 backdrop-blur-sm shadow-inner hover:bg-background/70"
              />
            </div>
          </div>

          {/* Action Buttons - Far right */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <button className="relative p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-background/50 transition-all duration-200">
              <Bell className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-background"></span>
            </button>

            <button className="flex items-center gap-2 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-background/50 transition-all duration-200">
              <User className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden md:block text-sm font-medium">Profil</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}