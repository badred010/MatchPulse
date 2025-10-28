import { X, Calendar, Clock, Trophy } from 'lucide-react';

/**
 * Modal component for displaying detailed match information
 */
export default function MatchModal({ match, onClose }) {
  if (!match) return null;

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('de-DE', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const { date, time } = formatDateTime(match.date);

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{match.competition}</h2>
            <p className="text-sm text-muted-foreground mt-1">{match.league}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status */}
          <div className="flex justify-center">
            {match.status === 'LIVE' && (
              <div className="live-badge text-lg">
                <span className="live-dot"></span>
                <span>LIVE {match.minute}'</span>
              </div>
            )}
            {match.status === 'ENDED' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-semibold bg-muted text-muted-foreground">
                Beendet
              </div>
            )}
            {match.status === 'SCHEDULED' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-semibold bg-secondary text-secondary-foreground">
                Angesetzt
              </div>
            )}
          </div>

          {/* Score */}
          <div className="bg-muted/30 rounded-xl p-8">
            <div className="flex items-center justify-between gap-8">
              {/* Home team */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-md">
                  {match.homeTeam.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-foreground">{match.homeTeam}</h3>
              </div>

              {/* Score or time */}
              <div className="text-center">
                {match.homeScore !== null ? (
                  <div className="text-5xl font-bold text-foreground">
                    {match.homeScore} : {match.awayScore}
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-muted-foreground">
                    vs
                  </div>
                )}
              </div>

              {/* Away team */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-md">
                  {match.awayTeam.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-foreground">{match.awayTeam}</h3>
              </div>
            </div>
          </div>

          {/* Match details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Trophy className="w-5 h-5" />
              <span className="font-medium">{match.competition}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>{time} Uhr</span>
            </div>
          </div>

          {/* Additional info */}
          {match.status === 'LIVE' && (
            <div className="bg-live/10 border border-live/20 rounded-lg p-4 text-center">
              <p className="text-sm text-foreground">
                ⚡ Live-Updates werden automatisch aktualisiert
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
