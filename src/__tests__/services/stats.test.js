import { getComputedTable } from '../../services/stats';

describe('Stats', () => {
  it('should compute the table correctly', () => {
    const weeksMatches = [
      [
        { teamIds: [1, 2], score: [5, 2], teams: ['Team1', 'Team2'] },
        { teamIds: [1, 3], score: [1, 1], teams: ['Team1', 'Team3'] },
      ],
      [
        { teamIds: [1, 4], score: [0, 2], teams: ['Team1', 'Team4'] },
        { teamIds: [1, 3], score: [1, 3], teams: ['Team1', 'Team3'] },
      ],
    ];

    const expectedTable = [
      {
        id: 3,
        logo: 'http://acor.sl.pt:7777/logos/3.png',
        name: 'Team3',
        played: 2,
        won: 1,
        drawn: 1,
        lost: 0,
        gf: 4,
        ga: 2,
        gd: 2,
        points: 4,
        position: 1,
      },
      {
        id: 1,
        logo: 'http://acor.sl.pt:7777/logos/1.png',
        name: 'Team1',
        played: 4,
        won: 1,
        drawn: 1,
        lost: 2,
        gf: 7,
        ga: 8,
        gd: -1,
        points: 4,
        position: 2,
      },
      {
        id: 4,
        logo: 'http://acor.sl.pt:7777/logos/4.png',
        name: 'Team4',
        played: 1,
        won: 1,
        drawn: 0,
        lost: 0,
        gf: 2,
        ga: 0,
        gd: 2,
        points: 3,
        position: 3,
      },
      {
        id: 2,
        logo: 'http://acor.sl.pt:7777/logos/2.png',
        name: 'Team2',
        played: 1,
        won: 0,
        drawn: 0,
        lost: 1,
        gf: 2,
        ga: 5,
        gd: -3,
        points: 0,
        position: 4,
      },
    ];
    const table = getComputedTable(weeksMatches);

    expect(table).toEqual(expectedTable);
  });
});

describe('Stats - Total points', () => {
  test('the team 1 in the lead', () => {
    const weeksMatches = [
      [
        { teamIds: [1, 2], score: [2, 0], teams: ['Team1', 'Team2'] },
        { teamIds: [1, 2], score: [1, 1], teams: ['Team1', 'Team2'] },
      ],
    ];

    const table = getComputedTable(weeksMatches);

    expect(table[0].id).toEqual(1);
    expect(table[0].points > table[1].points).toBe(true);
  });
});

describe('Stats - Goal difference', () => {
  test('team 1 in the lead', () => {
    const weeksMatches = [
      [
        { teamIds: [1, 2], score: [2, 0], teams: ['Team1', 'Team2'] },
        { teamIds: [1, 2], score: [0, 1], teams: ['Team1', 'Team2'] },
      ],
    ];

    const table = getComputedTable(weeksMatches);

    expect(table[0].id).toEqual(1);
    expect(table[0].gd > table[1].gd).toBe(true);
  });
});
describe('Stats - Goals scored', () => {
  test('team 1 in the lead', () => {
    const weeksMatches = [
      [
        { teamIds: [1, 3], score: [4, 2], teams: ['Team1', 'Team3'] },
        { teamIds: [2, 3], score: [2, 0], teams: ['Team2', 'Team3'] },
      ],
    ];

    const table = getComputedTable(weeksMatches);

    expect(table[0].id).toEqual(1);
    expect(table[0].gf > table[1].gf).toBe(true);
  });
});

describe('Stats - No criteria reached', () => {
  test('team 1 and team 2 at the same position', () => {
    const weeksMatches = [
      [
        { teamIds: [1, 3], score: [2, 0], teams: ['Team1', 'Team3'] },
        { teamIds: [2, 3], score: [2, 0], teams: ['Team2', 'Team3'] },
      ],
    ];

    const table = getComputedTable(weeksMatches);

    expect(table[0].position === 1).toBe(true);
    expect(table[0].position === table[1].position).toBe(true);
    expect(table[0].points === table[1].points).toBe(true);
    expect(table[0].gd === table[1].gd).toBe(true);
    expect(table[0].gf === table[1].gf).toBe(true);
  });
});
