import React from 'react';
import { Link } from 'react-router-dom';

import { Table, Thead, Tbody, TdTeam } from './styles';

function TableViewBody({ table }) {
  const renderTableData = () => {
    return table.map((club, index) => {
      const {
        id,
        name,
        logo,
        played,
        won,
        drawn,
        gf,
        ga,
        gd,
        points,
        position,
      } = club; //destructuring

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

  return (
    <Table>
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
    </Table>
  );
}

export default TableViewBody;
