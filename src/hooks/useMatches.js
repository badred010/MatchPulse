import { useState, useEffect } from 'react';
import { mockMatches } from '../data/mockMatches.ts';

/**
 * Simulates realistic live updates for demo purposes
 */
function getUpdatedMatches(prevMatches) {
  return prevMatches.map(match => {
    if (match.status !== 'LIVE') return match;

    let { homeScore, awayScore, minute } = match;

    // Increment simulated minutes (1 tick = 1 minute)
    minute += 1;

    // Realistic scoring chance: ~3% per minute
    if (Math.random() < 0.03) homeScore += 1;
    if (Math.random() < 0.03) awayScore += 1;

    // End match at 90 minutes
    const status = minute >= 90 ? 'ENDED' : 'LIVE';
    if (status === 'ENDED') minute = 90;

    return { ...match, homeScore, awayScore, minute, status };
  });
}

/**
 * Custom hook to fetch and manage match data
 * Uses mock data with simulated live updates
 */
export function useMatches() {
  const [matches, setMatches] = useState(mockMatches);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API delay for initial load
    const timeout = setTimeout(() => {
      setMatches(mockMatches);
      setLoading(false);
    }, 500);

    // Live update interval every 10 seconds
    const interval = setInterval(() => {
      setMatches(prev => getUpdatedMatches(prev));
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return { matches, loading, error };
}
