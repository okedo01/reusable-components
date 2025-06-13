interface tournament {
    league: string;
    season: string;
    teams: [];
    players: [];
    resentMatches: [];
    scorers: string[];
}

interface teams {
    id: number;
    name: string;
    stadium: string;
    coach: string;
}

interface Players {
    id: number;
    name: string;
    position: string;
    age: number;
    nationality: string;
    goals: number;
    assists: number;
    tackles: number;
}

interface resentMatches {
    matchId: number;
    date: string;
    homeTeam: string;
    awayTeam: string;
    score: string;
    scorers: string[];
}