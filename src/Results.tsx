import React from 'react'
import type { Tournaments } from './Types'
import { tournaments } from "./Matches"

const Results: React.FC = () => {
  return (
    <div>
        <ul>
            { tournaments.map((tournament: Tournaments) => (
                <li key={tournament.league}>
                    <h2>{ tournament.league } - { tournament.season }</h2>
                    { tournament.teams.map((team) => (
                        <p key={team.id}>
                            { team.name } - { team.stadium }
                        </p>
                    ))}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Results