import React from 'react';

import {
  TeamLeft,
  TeamRight,
  Score,
  ScoreItem,
  ScoreSeparator,
  Logo,
  LogoContainerLeft,
  LogoContainerRight,
} from './styles';

// TASK #1 - create result line
const Result = props => {
  const {
    teamId1,
    teamId2,
    team1Win,
    team2Win,
    logoTeam1,
    logoTeam2,
    team1,
    team2,
    score1,
    score2,
  } = props;

  return (
    <>
      <TeamLeft to={`/teams/${teamId1}`} winner={team1Win}>
        {team1}
      </TeamLeft>

      <LogoContainerLeft>
        <Logo src={logoTeam1}></Logo>
      </LogoContainerLeft>

      <Score>
        <ScoreItem>{score1}</ScoreItem>
        <ScoreSeparator />
        <ScoreItem>{score2}</ScoreItem>
      </Score>

      <LogoContainerRight>
        <Logo src={logoTeam2}></Logo>
      </LogoContainerRight>

      <TeamRight to={`/teams/${teamId2}`} winner={team2Win}>
        {team2}
      </TeamRight>
    </>
  );
};

export default Result;
