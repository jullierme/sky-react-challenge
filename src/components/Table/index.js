import React, { useEffect, useState } from 'react';

import { fetch } from '../../services/api';

function Table() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    const data = await fetch(`/weeks`);

    computeTable(data);
  };

  // TASK #4 - create a table of results
  const computeTable = weeksMatches => {
    const mp = new Map();

    weeksMatches.map(week => {
      week.map(match => calculateTheMatch(mp, match));
    });

    const tb = Array.from(mp.values());

    tb.sort((clubA, clubB) => {
      /**
       * criteria for finding the Premier League ranking are:
       *  - total points
       *  - goal difference
       *  - goals scored
       */
      if (clubA.points > clubB.points) return -1;
      if (clubA.points < clubB.points) return 1;

      if (clubA.gd > clubB.gd) return -1;
      if (clubA.gd < clubB.gd) return 1;

      if (clubA.gf > clubB.gf) return -1;
      if (clubA.gf < clubB.gf) return 1;

      return 0;
    });

    setTable(tb);
  };

  const calculateTheMatch = (mp, match) => {
    calculateThePoints(getTeam(mp, match, 0), match.score[0], match.score[1]);
    calculateThePoints(getTeam(mp, match, 1), match.score[1], match.score[0]);
  };

  const calculateThePoints = (team, goalsFor, goalsAgainst) => {
    team.played += 1;
    team.won += goalsFor > goalsAgainst ? 1 : 0;
    team.drawn += goalsFor === goalsAgainst ? 1 : 0;
    team.lost += goalsFor < goalsAgainst ? 1 : 0;
    team.gf += goalsFor;
    team.ga += goalsAgainst;
    team.gd = team.gf - team.gd;
    team.points +=
      goalsFor === goalsAgainst ? 1 : goalsFor > goalsAgainst ? 3 : 0;
  };

  const getTeam = (mp, match, index) => {
    let id = match.teamIds[index];
    let team = mp.get(id + '');

    if (team) return team;

    team = {
      id,
      logo: `http://acor.sl.pt:7777/logos/${id}`,
      name: match.teams[index],
      played: 0,
      won: 0,
      drawn: 0,
      gf: 0, //goals for
      ga: 0, //goals against
      gd: 0, //goals difference
      points: 0,
    };

    mp.set(id + '', team);

    return team;
  };

  const renderTableData = () => {
    return table.map((club, index) => {
      const { name, logo, played, won, drawn, gf, ga, gd, points } = club; //destructuring
      const position = index + 1;

      return (
        <tr key={index}>
          <td>{position}</td>
          <td>
            <img src={logo} />
          </td>
          <td>{name}</td>
          <td>{played}</td>
          <td>{won}</td>
          <td>{drawn}</td>
          <td>{gf}</td>
          <td>{ga}</td>
          <td>{gd}</td>
          <td>{points}</td>
        </tr>
      );
    });
  };

  if (!table) return <div>loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Club</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
}

export default Table;
