import { useState, useMemo } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import MatchesGrid from '../components/MatchesGrid';
import MatchModal from '../components/MatchModal';
import Footer from '../components/Footer';
import { useMatches } from '../hooks/useMatches';

/**
 * Main page component for MatchPulse
 */
export default function Index() {
  const { matches, loading, error } = useMatches();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [showLiveOnly, setShowLiveOnly] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Filter matches based on search, league, and live status
  const filteredMatches = useMemo(() => {
    return matches.filter(match => {
      // Search filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        match.homeTeam.toLowerCase().includes(searchLower) ||
        match.awayTeam.toLowerCase().includes(searchLower) ||
        match.league.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;

      // League filter
      if (selectedLeague !== 'all' && match.league !== selectedLeague) {
        return false;
      }

      // Live filter
      if (showLiveOnly && match.status !== 'LIVE') {
        return false;
      }

      return true;
    });
  }, [matches, searchTerm, selectedLeague, showLiveOnly]);

  // Group matches by status for better organization
  const sortedMatches = useMemo(() => {
    return [...filteredMatches].sort((a, b) => {
      const statusOrder = { LIVE: 0, SCHEDULED: 1, ENDED: 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }, [filteredMatches]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Fehler beim Laden</h2>
          <p className="text-muted-foreground">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <FilterBar
        selectedLeague={selectedLeague}
        onLeagueChange={setSelectedLeague}
        showLiveOnly={showLiveOnly}
        onLiveToggle={() => setShowLiveOnly(!showLiveOnly)}
      />

      <main className="flex-1">
        {loading ? (
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-muted-foreground">Lade Spiele...</p>
            </div>
          </div>
        ) : (
          <MatchesGrid 
            matches={sortedMatches}
            onMatchClick={setSelectedMatch}
          />
        )}
      </main>

      <Footer />

      {/* Match detail modal */}
      {selectedMatch && (
        <MatchModal
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}
