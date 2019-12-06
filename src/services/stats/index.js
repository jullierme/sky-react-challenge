import { getTeamLogo } from '../api';

// TASK #4 - create a table of results
export function getComputedTable(weeksMatches) {
  const mp = new Map();

  weeksMatches.map(week => {
    return week ? week.map(match => computeTheMatch(mp, match)) : null;
  });

  const tb = Array.from(mp.values());

  tb.sort(sort);

  return tb;
}

function sort(clubA, clubB) {
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
}

function computeTheMatch(mp, match) {
  let club1 = getClub(mp, match, 0);
  let club2 = getClub(mp, match, 1);

  computeThePoints(club1, match.score[0], match.score[1]);
  computeThePoints(club2, match.score[1], match.score[0]);
}

function computeThePoints(club, goalsFor, goalsAgainst) {
  if (!club) return;

  club.played += 1;
  club.won += goalsFor > goalsAgainst ? 1 : 0;
  club.drawn += goalsFor === goalsAgainst ? 1 : 0;
  club.lost += goalsFor < goalsAgainst ? 1 : 0;
  club.gf += goalsFor;
  club.ga += goalsAgainst;
  club.gd = club.gf - club.gd;
  club.points +=
    goalsFor === goalsAgainst ? 1 : goalsFor > goalsAgainst ? 3 : 0;
}

function getClub(mp, match, index) {
  let id = match.teamIds[index];

  let club = mp.get(id + '');

  if (club) return club;

  club = {
    id,
    logo: getTeamLogo(id),
    name: match.teams[index],
    played: 0,
    won: 0,
    drawn: 0,
    gf: 0, //goals for
    ga: 0, //goals against
    gd: 0, //goals difference
    points: 0,
  };

  mp.set(id + '', club);

  return club;
}
