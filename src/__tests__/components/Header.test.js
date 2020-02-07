import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { LinkMenu } from '../../components/Header/styles';

describe('Results', () => {
  let wrapper;

  beforeEach(() => {
    {/*
      A <Router> that keeps the history of your “URL” in memory
      (does not read or write to the address bar).
      Useful in tests and non-browser environments like React Native.
    */}
    wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('should have two links', () => {
    expect(wrapper.find(LinkMenu).length).toEqual(2);
  });

  it('includes link to Table', () => {
    expect(wrapper).toContainReact(<LinkMenu to="/table">Table</LinkMenu>);
  });

  it('includes link to Weeks', () => {
    expect(wrapper).toContainReact(<LinkMenu to="/weeks/1">Weeks</LinkMenu>);
  });
});
