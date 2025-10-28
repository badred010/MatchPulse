/**
 * Modern FilterBar component
 */
export default function FilterBar({ selectedLeague, onLeagueChange, showLiveOnly, onLiveToggle }) {
  const leagues = [
    { id: 'all', name: 'Alle Ligen' },
    { id: 'Bundesliga', name: 'Bundesliga' },
    { id: 'Premier League', name: 'Premier League' },
    { id: 'La Liga', name: 'La Liga' },
    { id: 'Serie A', name: 'Serie A' },
    { id: 'Ligue 1', name: 'Ligue 1' }
  ];

  return (
    <div className="bg-background/70 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        
        {/* League Filters */}
        <div className="flex flex-wrap gap-3">
          {leagues.map(league => (
            <button
              key={league.id}
              onClick={() => onLeagueChange(league.id)}
              className={`
                px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200
                ${selectedLeague === league.id 
                  ? 'bg-primary text-background shadow-md hover:scale-105' 
                  : 'bg-background/50 text-muted-foreground hover:bg-background/70'}
              `}
            >
              {league.name}
            </button>
          ))}
        </div>

        {/* Live Toggle */}
        <button
          onClick={onLiveToggle}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200
            ${showLiveOnly 
              ? 'bg-red-500 text-background shadow-md hover:scale-105' 
              : 'bg-background/50 text-muted-foreground hover:bg-background/70'}
          `}
        >
          {showLiveOnly && (
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-sm"></span>
          )}
          Nur Live
        </button>

      </div>
    </div>
  );
}
