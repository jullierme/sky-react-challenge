import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Results from '../../components/Results';
import Result from '../../components/Result';
import { getTeamLogo } from '../../services/api';

describe('Results', () => {
  const dataMock = [
    { teamIds: [0, 1], score: [5, 2], teams: ['Team1', 'Team2'] },
  ];

  const expectedObject = [
    {
      teamId1: dataMock[0].teamIds[0],
      teamId2: dataMock[0].teamIds[1],
      team1Win: dataMock[0].score[0] > dataMock[0].score[1] ? 1 : 0,
      team2Win: dataMock[0].score[0] < dataMock[0].score[1] ? 1 : 0,
      team1: dataMock[0].teams[0],
      team2: dataMock[0].teams[1],
      logoTeam1: getTeamLogo(dataMock[0].teamIds[0]),
      logoTeam2: getTeamLogo(dataMock[0].teamIds[1]),
      score1: dataMock[0].score[0],
      score2: dataMock[0].score[1],
      id: 0,
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Results data={dataMock} />
      </MemoryRouter>
    );
  });

  it('should renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should render the Result component with the correct properties', () => {
    expect(wrapper.find(Result).props().key).toBe(expectedObject.id);
    expect(wrapper.find(Result).props()).toEqual(expectedObject[0]);
  });
});

describe('Results with empty data', () => {
  const dataMock = [];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Results data={dataMock} />
      </MemoryRouter>
    );
  });

  it('should renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should shows not found message', () => {
    expect(wrapper.find('h1').text()).toEqual('Not found');
  });
});
