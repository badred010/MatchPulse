import { Clock, Calendar, Trophy, Users, Shield, ShieldHalf } from 'lucide-react';

export default function MatchCard({ match, onClick }) {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      day: '2-digit', 
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusBadge = () => {
    switch (match.status) {
      case 'LIVE':
        return (
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              LIVE
              <span className="text-xs opacity-90">{match.minute}'</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine rounded-full"></div>
          </div>
        );
      case 'ENDED':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200">
            BEENDET
          </div>
        );
      case 'SCHEDULED':
        return (
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white border border-blue-300 shadow-md">
              <Clock className="w-3.5 h-3.5" />
              {formatTime(match.date)}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine rounded-lg"></div>
          </div>
        );
      default:
        return null;
    }
  };

  const getTeamIcon = (teamName, isHome = true) => {

    if (teamName.toLowerCase().includes('bayeereen') || teamName.toLowerCase().includes('muyyynich')) {
      return <Shield className="w-5 h-5 text-red-600" />;
    } else if (teamName.toLowerCase().includes('dortjjjmund')) {
      return <Shield className="w-5 h-5 text-yellow-600" />;
    } else {
      return isHome ? <ShieldHalf className="w-5 h-5 text-blue-600" /> : <Shield className="w-5 h-5 text-green-600" />;
    }
  };

  const isLive = match.status === 'LIVE';
  const hasScore = match.homeScore !== null;

  return (
    <div 
      className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 relative overflow-hidden"
      onClick={() => onClick(match)}
    >
      {/* Animated background effect for LIVE matches */}
      {isLive && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 via-transparent to-orange-50/30 animate-pulse"></div>
      )}
      
      {/* Header with league and status */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
            {match.league}
          </span>
        </div>
        {getStatusBadge()}
      </div>

      {/* Teams section */}
      <div className="space-y-4 mb-4 relative z-10">
        {/* Home team */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-200 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {getTeamIcon(match.homeTeam, true)}
            </div>
            <span className="font-semibold text-gray-900 text-base truncate">
              {match.homeTeam}
            </span>
          </div>
          {hasScore && (
            <div className="flex-shrink-0 min-w-[2.5rem] text-right">
              <span className="text-2xl font-bold text-gray-900">
                {match.homeScore}
              </span>
            </div>
          )}
        </div>

        {/* VS divider */}
        <div className="flex items-center justify-center py-1">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <span className="px-3 text-xs font-bold text-gray-500 bg-gray-100 rounded-full py-1">VS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        {/* Away team */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center border border-purple-200 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {getTeamIcon(match.awayTeam, false)}
            </div>
            <span className="font-semibold text-gray-900 text-base truncate">
              {match.awayTeam}
            </span>
          </div>
          {hasScore && (
            <div className="flex-shrink-0 min-w-[2.5rem] text-right">
              <span className="text-2xl font-bold text-gray-900">
                {match.awayScore}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer with date for scheduled matches */}
      {match.status === 'SCHEDULED' && (
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-600 relative z-10">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">{formatDate(match.date)}</span>
        </div>
      )}

      {/* Live indicator bar */}
      {isLive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-b-xl animate-pulse"></div>
      )}

      {/* Add custom animation for shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
}