import React, { useEffect, useState } from 'react';
import Results from '../Results';
import { fetch } from '../../services/api';
import { getComputedTable } from '../../services/stats';

import {
  Body,
  Header,
  Container,
  StatsContainer,
  ResultsContainer,
  Label,
  Stat,
} from './styles';

function Team({ match }) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchTeam();
  }, [match.params.index]);

  const fetchTeam = async () => {
    setLoading(true);

    const data = await fetch(`/teams/${match.params.index}`);
    data.id = parseInt(data.id, 10);

    setTeam(data);
    setStats(getTeamStats(data.id, data.results));

    setLoading(false);
  };

  // TASK #3 - compute team stats
  const getTeamStats = (id, results) => {
    const table = getComputedTable([results]);

    return table.find(club => {
      return club.id === id;
    });
  };

  if (loading) return <div>loading...</div>;
  if (!team.results) return <div>Not found!</div>;

  return (
    <Container>
      <Header>
        <img src={team.logo} alt={team.name + ' logo'} />
        <h1>{team.name}</h1>
      </Header>
      <Body>
        <StatsContainer>
          <Label>Played:</Label>
          <Stat>{stats.played}</Stat>

          <Label>Points:</Label>
          <Stat>{stats.points}</Stat>

          <Label>Won:</Label>
          <Stat>{stats.won}</Stat>

          <Label>Drawn:</Label>
          <Stat>{stats.drawn}</Stat>

          <Label>Goals for:</Label>
          <Stat>{stats.gf}</Stat>

          <Label>Goals against:</Label>
          <Stat>{stats.ga}</Stat>

          <Label>Goals difference:</Label>
          <Stat>{stats.gd}</Stat>
        </StatsContainer>
        <ResultsContainer>
          <Results results={team.results} />
        </ResultsContainer>
      </Body>
    </Container>
  );
}

export default Team;
