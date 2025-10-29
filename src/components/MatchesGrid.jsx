import MatchCard from './MatchCard'
import { motion } from 'framer-motion'
import Easter from './Easter'


export default function MatchesGrid({ matches, onMatchClick }) {
  if (matches.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl shadow-inner">
        <div className="w-28 h-28 mb-6 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl flex items-center justify-center text-5xl animate-bounce shadow-lg">
          ⚽
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">Keine Spiele gefunden</h3>
        <p className="text-gray-600 text-lg">Vielleicht später — oder filtere nach einer anderen Liga.</p>
      </div>
    )
  }

  return (
    <div className="relative px-6 lg:px-12 py-12 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title with accent bar */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></span>
            Live Spiele 
            <span className="ml-4 text-sm font-medium bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full">
              {matches.length} {matches.length === 1 ? 'Spiel' : 'Spiele'}
            </span>
          </h2>
    <Easter />
        </div>

        {/* Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.03, rotateX: 3 }}
              className="transform-gpu transition-all"
            >
              <MatchCard match={match} onClick={onMatchClick} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {matches.length >= 12 && (
          <div className="mt-16 text-center">
            <button className="relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
              Mehr Spiele laden
              <span className="absolute inset-0 rounded-2xl bg-white/10 blur opacity-0 hover:opacity-20 transition-all"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
