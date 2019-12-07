import React from 'react';
import { shallow } from 'enzyme';

import WeeksViewBody from '../../../../components/views/WeeksView/WeeksViewBody';

describe('WeeksViewBody', () => {
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

  it('should render without error', () => {
    const wrapper = shallow(
      <WeeksViewBody weeks={weeksMatches} chosenWeek={0} />
    );
    expect(wrapper).toBeDefined();
  });
});
