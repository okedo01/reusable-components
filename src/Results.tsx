import React from 'react'
import type { Tournaments } from './Types'
import { tournaments } from "./Matches"

const Results: React.FC = () => {
  return (
    <div>
        { tournaments.map((tournament: Tournaments) => (
            <h2 key={tournament.league}> 
                { tournament.league } - { tournament.season }

                { tournament.teams.map((team) => (
                    <p key={team.id}>
                        { team.name } in { team.stadium } with their coacher { team.coach }

                        { team.players.map((player) => (
                            <h4 key={player.id}>
                                { player.name } having the following properties: 
                                <p>Nationality: { player.nationality } </p>
                                <p>Age: { player.age } years old</p>
                                <p>Position: { player.position } </p>
                                <p> { player.goals } goals conceded in the whole season</p>
                                <p>Assists { player.assists } </p>
                                <p> { player.tackles } tackles</p>
                            </h4>
                        ))}
                    </p>
                ))}
            </h2>
        ))}
    </div>
  )
}

export default Results