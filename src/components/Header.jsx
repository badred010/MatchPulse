import { Search } from 'lucide-react';

/**
 * Header component with logo and search functionality
 */
export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚽</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">MatchPulse</h1>
              <p className="text-sm text-muted-foreground">Live Fußball-Ergebnisse</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative flex-1 md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Team oder Liga suchen..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input pl-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
