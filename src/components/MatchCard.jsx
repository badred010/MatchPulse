import { Clock, Calendar } from 'lucide-react';

/**
 * Match card component displaying match information
 */
export default function MatchCard({ match, onClick }) {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
  };

  const getStatusBadge = () => {
    switch (match.status) {
      case 'LIVE':
        return (
          <div className="live-badge">
            <span className="live-dot"></span>
            <span>LIVE {match.minute}'</span>
          </div>
        );
      case 'ENDED':
        return (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-muted text-muted-foreground">
            Beendet
          </div>
        );
      case 'SCHEDULED':
        return (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-secondary text-secondary-foreground">
            <Clock className="w-3 h-3" />
            {formatTime(match.date)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="match-card cursor-pointer"
      onClick={() => onClick(match)}
    >
      {/* League badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {match.league}
        </span>
        {getStatusBadge()}
      </div>

      {/* Teams and scores */}
      <div className="space-y-3">
        {/* Home team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold">
              {match.homeTeam.charAt(0)}
            </div>
            <span className="font-semibold text-foreground">{match.homeTeam}</span>
          </div>
          {match.homeScore !== null && (
            <span className="text-2xl font-bold text-foreground ml-2">
              {match.homeScore}
            </span>
          )}
        </div>

        {/* Away team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold">
              {match.awayTeam.charAt(0)}
            </div>
            <span className="font-semibold text-foreground">{match.awayTeam}</span>
          </div>
          {match.awayScore !== null && (
            <span className="text-2xl font-bold text-foreground ml-2">
              {match.awayScore}
            </span>
          )}
        </div>
      </div>

      {/* Date for scheduled matches */}
      {match.status === 'SCHEDULED' && (
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {formatDate(match.date)}
        </div>
      )}
    </div>
  );
}
