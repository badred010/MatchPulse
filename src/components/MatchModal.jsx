import { X, Calendar, Clock, Trophy } from 'lucide-react'

export default function MatchModal({ match, onClose }) {
  if (!match) return null

  const formatDateTime = (dateString) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
    }
  }

  const { date, time } = formatDateTime(match.date)

  const statusStyles = {
    LIVE: 'bg-red-500/15 border-red-500 text-red-400',
    ENDED: 'bg-gray-500/15 border-gray-500 text-gray-300',
    SCHEDULED: 'bg-blue-500/15 border-blue-500 text-blue-400',
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c0f12] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">{match.competition}</h2>
            <p className="text-sm text-gray-400 mt-1">{match.league}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        {/* Status */}
        <div className="flex justify-center mt-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-sm font-medium ${statusStyles[match.status]}`}
          >
            {match.status === 'LIVE' && (
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow"></span>
            )}
            {match.status === 'LIVE'
              ? `LIVE ${match.minute}'`
              : match.status === 'ENDED'
              ? 'Beendet'
              : 'Geplant'}
          </span>
        </div>

        {/* Teams & Score */}
        <div className="mt-8 px-8 pb-10">
          <div className="flex items-center justify-between gap-6">
            {/* Home */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-900/40 flex items-center justify-center text-4xl font-bold text-white shadow-md">
                {match.homeTeam.charAt(0)}
              </div>
              <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-200">
                {match.homeTeam}
              </h3>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center justify-center">
              {match.homeScore !== null ? (
                <div
                  className={`text-5xl md:text-6xl font-extrabold tracking-wider ${
                    match.status === 'LIVE' ? 'text-red-400 animate-pulse' : 'text-white'
                  }`}
                >
                  {match.homeScore} : {match.awayScore}
                </div>
              ) : (
                <div className="text-3xl text-gray-500">vs</div>
              )}
            </div>

            {/* Away */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-yellow-600/30 to-orange-900/40 flex items-center justify-center text-4xl font-bold text-white shadow-md">
                {match.awayTeam.charAt(0)}
              </div>
              <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-200">
                {match.awayTeam}
              </h3>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="border-t border-white/10 bg-slate-900/60 backdrop-blur-sm px-8 py-6 space-y-3 text-gray-300 text-sm">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>{match.competition}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span>{time} Uhr</span>
          </div>
        </div>

        {/* Live info */}
        {match.status === 'LIVE' && (
          <div className="bg-gradient-to-r from-red-600/10 to-red-700/10 text-center py-4 border-t border-red-500/20">
            <p className="text-sm text-red-400 font-medium">
              ⚡ Live-Updates werden automatisch aktualisiert
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
