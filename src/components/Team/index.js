import React, { useEffect, useState } from 'react';
import Results from '../Results';
import { fetch } from '../../services/api';

function Team({ match }) {
  const [team, seTeam] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(`/teams/${match.params.index}`);

    seTeam(data);
    setStats(computeTeamStats(data.id, data.results));
  };

  // TASK #3 - compute team stats
  const computeTeamStats = (id, results) => {
    return {};
  };

  if (!team) return <div>loading...</div>;

  return (
    <div className="team">
      <h1>Team {team.name}</h1>

      <h2>Games</h2>
      <Results results={team.results} />
    </div>
  );
}

export default Team;
