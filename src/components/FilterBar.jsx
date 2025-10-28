/**
 * Filter bar component for league selection and live toggle
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
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* League filters */}
          <div className="flex flex-wrap gap-2">
            {leagues.map(league => (
              <button
                key={league.id}
                onClick={() => onLeagueChange(league.id)}
                className={`filter-btn ${
                  selectedLeague === league.id 
                    ? 'filter-btn-active' 
                    : 'filter-btn-inactive'
                }`}
              >
                {league.name}
              </button>
            ))}
          </div>

          {/* Live toggle */}
          <button
            onClick={onLiveToggle}
            className={`filter-btn whitespace-nowrap ${
              showLiveOnly 
                ? 'bg-live text-live-foreground shadow-md' 
                : 'filter-btn-inactive'
            }`}
          >
            <span className="flex items-center gap-2">
              {showLiveOnly && <span className="live-dot"></span>}
              Nur Live
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
