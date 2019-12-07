import React from 'react';
import { shallow } from 'enzyme';

import TeamViewBody from '../../../../components/views/TeamView/TeamViewBody';

describe('TeamViewBody', () => {
  const team = { played: 1, points: 3, won: 1, drawn: 0, gf: 0, ga: 0, gd: 0 };
  const stats = {
    logo: '',
    name: 'name',
    results: { teamIds: [0, 1], score: [5, 2], teams: ['Team1', 'Team2'] },
  };

  it('should render without error', () => {
    const wrapper = shallow(<TeamViewBody stats={stats} team={team} />);
    expect(wrapper).toBeDefined();
  });
});
