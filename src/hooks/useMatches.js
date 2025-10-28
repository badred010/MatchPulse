import { useState, useEffect } from 'react';
import { mockMatches, getUpdatedMatches } from '../data/mockMatches';

/**
 * Custom hook to fetch and manage match data
 * By default uses mock data with simulated live updates
 * Can be extended to use real API by setting API_KEY environment variable
 */
export function useMatches() {
  const [matches, setMatches] = useState(mockMatches);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if API key is available (for future API integration)
    const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;
    
    if (apiKey) {
      // Future: Implement API fetching here
      // For now, we'll just use mock data
      console.log('API mode not yet implemented, using mock data');
    }

    // Simulate live updates every 10 seconds
    const interval = setInterval(() => {
      setMatches(prevMatches => getUpdatedMatches(prevMatches));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return { matches, loading, error };
}
