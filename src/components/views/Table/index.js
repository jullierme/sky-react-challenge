import React, { useEffect, useState } from 'react';

import { fetch } from '../../../services/api';
import { getComputedTable } from '../../../services/stats';
import { Link } from 'react-router-dom';

import { TableOfResults, Thead, Tbody, TdTeam } from './styles';

function Table() {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    setLoading(true);

    const weeksMatches = await fetch(`/weeks`);

    setTable(getComputedTable(weeksMatches));

    setLoading(false);
  };

  const renderTableData = () => {
    return table.map((club, index) => {
      const { id, name, logo, played, won, drawn, gf, ga, gd, points } = club; //destructuring
      const position = index + 1;

      return (
        <tr key={index}>
          <td>{position}</td>
          <TdTeam>
            <Link to={`/teams/${id}`}>
              <img src={logo} alt={name + ' logo'} /> {name}
            </Link>
          </TdTeam>
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

  if (loading) return <div>loading...</div>;
  if (!table.length) return <div>Not found!</div>;

  return (
    <TableOfResults>
      <Thead>
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
      </Thead>
      <Tbody>{renderTableData()}</Tbody>
    </TableOfResults>
  );
}

export default Table;
