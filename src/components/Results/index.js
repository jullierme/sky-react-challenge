import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Result from '../Result';
import { getTeamLogo } from '../../services/api';

function Results({ results }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    formatTheResults();
  }, [results]);

  const formatTheResults = () => {
    if (!results) {
      setMatches([]);
      return;
    }

    results = results.map((item, index) => {
      return {
        teamId1: item.teamIds[0],
        teamId2: item.teamIds[1],
        team1Win: item.score[0] > item.score[1] ? 1 : 0,
        team2Win: item.score[0] < item.score[1] ? 1 : 0,
        team1: item.teams[0],
        team2: item.teams[1],
        logoTeam1: getTeamLogo(item.teamIds[0]),
        logoTeam2: getTeamLogo(item.teamIds[1]),
        score1: item.score[0],
        score2: item.score[1],
        id: index,
      };
    });

    setMatches(results);
  };

  if (!matches || !matches.length) {
    return <h1>Not found</h1>;
  }

  return (
    <Container>
      {matches.map(match => {
        return <Result key={match.id} {...match} />;
      })}
    </Container>
  );
}

export default Results;
