import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import { getComputedTable } from '../../../../services/stats';
import TableViewBody from '../../../../components/views/TableView/TableViewBody';
import { TdTeam } from '../../../../components/views/TableView/TableViewBody/styles';

const team1Id = 1;
const team2Id = 2;
const team3Id = 3;
const team4Id = 4;

const team1Logo = 'http://acor.sl.pt:7777/logos/1.png';
const team2Logo = 'http://acor.sl.pt:7777/logos/2.png';
const team3Logo = 'http://acor.sl.pt:7777/logos/3.png';
const team4Logo = 'http://acor.sl.pt:7777/logos/4.png';

const team1Name = 'Team1';
const team2Name = 'Team2';
const team3Name = 'Team3';
const team4Name = 'Team4';

const team1Score = 1;
const team2Score = 0;
const team3Score = 3;
const team4Score = 5;

const weeksMatches = [
  [
    {
      teams: [team1Name, team2Name],
      score: [team1Score, team2Score],
      teamIds: [team1Id, team2Id],
    },
  ],
  [
    {
      teams: [team3Name, team4Name],
      score: [team3Score, team4Score],
      teamIds: [team3Id, team4Id],
    },
  ],
];

const table = getComputedTable(weeksMatches);

describe('views/Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <TableViewBody table={table} />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  /*it('renders without crashing', () => {
    expect(axios.get).toHaveBeenCalledWith(`${API}/weeks`);
  });*/

  it('should have ONLY 1 table', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });

  it('should have ONLY 1 thead ', () => {
    expect(wrapper.find('table').find('thead')).toHaveLength(1);
  });

  it('should have ONLY 1 tbody ', () => {
    expect(wrapper.find('table').find('tbody')).toHaveLength(1);
  });

  it('should have ONLY 4 rows ', () => {
    const row = wrapper
      .find('table')
      .find('tbody')
      .find('tr');

    expect(row).toHaveLength(4);
  });

  it('should have the number of th tags equals to number of columns ', () => {
    const headers = wrapper
      .find('table')
      .find('thead')
      .find('th');
    expect(headers).toHaveLength(9);
  });

  it('should shows the correct columns', () => {
    expect(wrapper.find('th')).toHaveLength(9);
  });

  it('should have the correct header', () => {
    expect(wrapper).toContainReact(
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
    );
  });

  it('should shows the correct team column', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <TdTeam>
          <Link to={`/teams/${team1Id}`}>
            <img src={team1Logo} alt={team1Name + ' logo'} /> {team1Name}
          </Link>
        </TdTeam>,
      ])
    ).toEqual(true);

    expect(
      wrapper.containsAllMatchingElements([
        <TdTeam>
          <Link to={`/teams/${team2Id}`}>
            <img src={team2Logo} alt={team2Name + ' logo'} /> {team2Name}
          </Link>
        </TdTeam>,
      ])
    ).toEqual(true);

    expect(
      wrapper.containsAllMatchingElements([
        <TdTeam>
          <Link to={`/teams/${team3Id}`}>
            <img src={team3Logo} alt={team3Name + ' logo'} /> {team3Name}
          </Link>
        </TdTeam>,
      ])
    ).toEqual(true);

    expect(
      wrapper.containsAllMatchingElements([
        <TdTeam>
          <Link to={`/teams/${team4Id}`}>
            <img src={team4Logo} alt={team4Name + ' logo'} /> {team4Name}
          </Link>
        </TdTeam>,
      ])
    ).toEqual(true);
  });
});
