import React, { useEffect, useState } from 'react';
import { fetch } from '../../../services/api';
import { getComputedTable } from '../../../services/stats';
import TeamViewBody from './TeamViewBody';

function TeamView({ match }) {
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

    console.log(
      table.find(club => {
        return club.id === id;
      })
    );

    return table.find(club => {
      return club.id === id;
    });
  };

  if (loading) return <div>loading...</div>;
  if (!stats) return <div>Not found!</div>;

  return <TeamViewBody stats={stats} team={team} />;
}

export default TeamView;
