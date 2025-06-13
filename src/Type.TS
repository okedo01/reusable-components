interface Tournaments {
  league: string;
  season: string;
  teams: Team[];
  recentMatches: RecentMatch[];
}

interface Team {
  id: number;
  name: string;
  stadium: string;
  coach: string;
  players: Player[];
}

interface Player {
  id: number;
  name: string;
  position: string;
  age: number;
  nationality: string;
  goals?: number;
  assists?: number;
  tackles?: number;
}

interface RecentMatch {
  matchId: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  scorers: string[];
}
