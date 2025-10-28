import MatchCard from './MatchCard';

/**
 * Grid layout component for displaying match cards
 */
export default function MatchesGrid({ matches, onMatchClick }) {
  if (matches.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-6xl mb-4">⚽</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Keine Spiele gefunden</h3>
          <p className="text-muted-foreground">
            Versuche es mit einem anderen Filter oder Suchbegriff.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map(match => (
          <MatchCard 
            key={match.id} 
            match={match}
            onClick={onMatchClick}
          />
        ))}
      </div>
    </div>
  );
}
