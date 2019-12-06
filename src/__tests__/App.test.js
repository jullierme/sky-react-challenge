import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter, Redirect } from 'react-router';

import App from '../App';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';

import Table from '../components/views/Table';
import Weeks from '../components/views/Weeks';
import Team from '../components/views/Team';

describe('App required routers', () => {
  const renderRoutes = path =>
    mount(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );

  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render table page when on root', () => {
    const component = renderRoutes('/');

    expect(component.find(Table)).toHaveLength(1);
    expect(component.find(Weeks)).toHaveLength(0);
    expect(component.find(Team)).toHaveLength(0);
  });

  it('should render Team page', () => {
    const component = renderRoutes('/teams/1');

    expect(component.find(Team)).toHaveLength(1);
    expect(component.find(Table)).toHaveLength(0);
    expect(component.find(Weeks)).toHaveLength(0);
  });

  it('should render Weeks page', () => {
    const component = renderRoutes('/weeks/1');

    expect(component.find(Weeks)).toHaveLength(1);
    expect(component.find(Team)).toHaveLength(0);
    expect(component.find(Table)).toHaveLength(0);
  });

  it('should redirect /table when invalid path', () => {
    const component = renderRoutes('/weekssssss');

    expect(component.find(Table)).toHaveLength(1);
  });
});

describe('App required elements', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('should have a GlobalStyle', () => {
    expect(wrapper.find(GlobalStyle).length).toEqual(1);
  });

  it('should have a Header', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });
});
