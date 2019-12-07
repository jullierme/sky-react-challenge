import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Result from '../../components/Result';
import { getTeamLogo } from '../../services/api';
import {
  TeamLeft,
  TeamRight,
  Score,
  ScoreItem,
  ScoreSeparator,
  Logo,
  LogoContainerLeft,
  LogoContainerRight,
} from '../../components/Result/styles';

describe('Results', () => {
  const data = [
    {
      teamId1: 1,
      teamId2: 2,
      team1Win: 1,
      team2Win: 0,
      team1: 'Team1',
      team2: 'Team2',
      logoTeam1: getTeamLogo(1),
      logoTeam2: getTeamLogo(2),
      score1: 5,
      score2: 2,
      id: 1,
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Result data={data} />
      </MemoryRouter>
    );
  });

  it('should renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should render the TEAM correctly', () => {
    expect(wrapper).toContainReact(
      <TeamLeft to={`/teams/${data.teamId1}`} winner={data.team1Win}>
        {data.team1}
      </TeamLeft>
    );

    expect(wrapper).toContainReact(
      <LogoContainerLeft>
        <Logo src={data.logoTeam1}></Logo>
      </LogoContainerLeft>
    );

    expect(wrapper).toContainReact(
      <Score>
        <ScoreItem>{data.score1}</ScoreItem>
        <ScoreSeparator />
        <ScoreItem>{data.score2}</ScoreItem>
      </Score>
    );

    expect(wrapper).toContainReact(
      <LogoContainerRight>
        <Logo src={data.logoTeam2}></Logo>
      </LogoContainerRight>
    );

    expect(wrapper).toContainReact(
      <TeamRight to={`/teams/${data.teamId2}`} winner={data.team2Win}>
        {data.team2}
      </TeamRight>
    );
  });
});
