// Mock match data for MatchPulse
// Simulates matches from top 5 European leagues

export const mockMatches = [
  // Bundesliga - Live matches
  {
    id: 1,
    league: "Bundesliga",
    homeTeam: "Bayern München",
    awayTeam: "Borussia Dortmund",
    homeScore: 2,
    awayScore: 1,
    status: "LIVE",
    minute: 67,
    date: new Date().toISOString(),
    competition: "Bundesliga - Spieltag 24"
  },
  {
    id: 2,
    league: "Bundesliga",
    homeTeam: "RB Leipzig",
    awayTeam: "Bayer Leverkusen",
    homeScore: 1,
    awayScore: 1,
    status: "LIVE",
    minute: 78,
    date: new Date().toISOString(),
    competition: "Bundesliga - Spieltag 24"
  },
  
  // Premier League - Live
  {
    id: 3,
    league: "Premier League",
    homeTeam: "Manchester City",
    awayTeam: "Arsenal",
    homeScore: 3,
    awayScore: 2,
    status: "LIVE",
    minute: 85,
    date: new Date().toISOString(),
    competition: "Premier League - Matchday 28"
  },
  {
    id: 4,
    league: "Premier League",
    homeTeam: "Liverpool",
    awayTeam: "Chelsea",
    homeScore: 0,
    awayScore: 0,
    status: "LIVE",
    minute: 34,
    date: new Date().toISOString(),
    competition: "Premier League - Matchday 28"
  },

  // La Liga - Ended
  {
    id: 5,
    league: "La Liga",
    homeTeam: "Real Madrid",
    awayTeam: "FC Barcelona",
    homeScore: 2,
    awayScore: 3,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    competition: "La Liga - Jornada 26"
  },
  {
    id: 6,
    league: "La Liga",
    homeTeam: "Atlético Madrid",
    awayTeam: "Sevilla",
    homeScore: 1,
    awayScore: 0,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    competition: "La Liga - Jornada 26"
  },

  // Serie A - Scheduled
  {
    id: 7,
    league: "Serie A",
    homeTeam: "Inter Milan",
    awayTeam: "AC Milan",
    homeScore: null,
    awayScore: null,
    status: "SCHEDULED",
    minute: null,
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    competition: "Serie A - Giornata 27"
  },
  {
    id: 8,
    league: "Serie A",
    homeTeam: "Juventus",
    awayTeam: "Napoli",
    homeScore: null,
    awayScore: null,
    status: "SCHEDULED",
    minute: null,
    date: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
    competition: "Serie A - Giornata 27"
  },

  // Ligue 1 - Mix
  {
    id: 9,
    league: "Ligue 1",
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Olympique Marseille",
    homeScore: 2,
    awayScore: 1,
    status: "LIVE",
    minute: 56,
    date: new Date().toISOString(),
    competition: "Ligue 1 - Journée 25"
  },
  {
    id: 10,
    league: "Ligue 1",
    homeTeam: "AS Monaco",
    awayTeam: "Lyon",
    homeScore: null,
    awayScore: null,
    status: "SCHEDULED",
    minute: null,
    date: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
    competition: "Ligue 1 - Journée 25"
  },

  // More Bundesliga
  {
    id: 11,
    league: "Bundesliga",
    homeTeam: "Eintracht Frankfurt",
    awayTeam: "VfB Stuttgart",
    homeScore: 2,
    awayScore: 2,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    competition: "Bundesliga - Spieltag 24"
  },
  {
    id: 12,
    league: "Bundesliga",
    homeTeam: "Borussia Mönchengladbach",
    awayTeam: "Werder Bremen",
    homeScore: null,
    awayScore: null,
    status: "SCHEDULED",
    minute: null,
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    competition: "Bundesliga - Spieltag 25"
  },

  // More Premier League
  {
    id: 13,
    league: "Premier League",
    homeTeam: "Manchester United",
    awayTeam: "Tottenham",
    homeScore: 1,
    awayScore: 2,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    competition: "Premier League - Matchday 28"
  },
  {
    id: 14,
    league: "Premier League",
    homeTeam: "Newcastle",
    awayTeam: "Brighton",
    homeScore: null,
    awayScore: null,
    status: "SCHEDULED",
    minute: null,
    date: new Date(Date.now() + 26 * 60 * 60 * 1000).toISOString(),
    competition: "Premier League - Matchday 29"
  },

  // More La Liga
  {
    id: 15,
    league: "La Liga",
    homeTeam: "Valencia",
    awayTeam: "Real Sociedad",
    homeScore: 0,
    awayScore: 1,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    competition: "La Liga - Jornada 26"
  },

  // More Serie A
  {
    id: 16,
    league: "Serie A",
    homeTeam: "AS Roma",
    awayTeam: "Lazio",
    homeScore: 3,
    awayScore: 1,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    competition: "Serie A - Giornata 26"
  },

  // More Ligue 1
  {
    id: 17,
    league: "Ligue 1",
    homeTeam: "Lille",
    awayTeam: "Lens",
    homeScore: 1,
    awayScore: 1,
    status: "ENDED",
    minute: 90,
    date: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    competition: "Ligue 1 - Journée 24"
  }
];

// Function to simulate live score updates
export function getUpdatedMatches(matches) {
  return matches.map(match => {
    if (match.status === "LIVE" && Math.random() > 0.7) {
      // 30% chance of score update for live matches
      const scoreHome = match.homeScore + (Math.random() > 0.5 ? 1 : 0);
      const scoreAway = match.awayScore + (Math.random() > 0.5 ? 1 : 0);
      const minute = Math.min(match.minute + Math.floor(Math.random() * 3), 90);
      
      return {
        ...match,
        homeScore: scoreHome,
        awayScore: scoreAway,
        minute: minute,
        status: minute >= 90 ? "ENDED" : "LIVE"
      };
    }
    return match;
  });
}
