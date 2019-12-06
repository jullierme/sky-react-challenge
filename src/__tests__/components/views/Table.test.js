import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../components/views/Table';
import { MemoryRouter } from 'react-router-dom';

describe('views/Table', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );
  });
});
