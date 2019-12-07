import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter, Route, Switch, Redirect } from 'react-router';
import { act } from 'react-dom/test-utils';
import App from '../App';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';

import TableView from '../components/views/TableView';
import WeeksView from '../components/views/WeeksView';
import TeamView from '../components/views/TeamView';

describe('App required routers', () => {
  /*const renderRoutes = path =>
    mount(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );
*/

  it('should match snapshot', async () => {
    await act(async () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  /*it('should render table page when on root', async () => {
    await act(async () => {
      const wrapper = shallow(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(TableView).length).toEqual(1);
      expect(wrapper.find(WeeksView)).toHaveLength(0);
      expect(wrapper.find(TeamView)).toHaveLength(0);
    });
  });*/

  /*const renderRoutes = path =>
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

    expect(component.find(TableView)).toHaveLength(1);
    expect(component.find(WeeksView)).toHaveLength(0);
    expect(component.find(TeamView)).toHaveLength(0);
  });

  it('should render Table page', () => {
    const component = renderRoutes('/table');

    expect(component.find(TableView)).toHaveLength(1);
    expect(component.find(WeeksView)).toHaveLength(0);
    expect(component.find(TeamView)).toHaveLength(0);
  });

  it('should render Team page', () => {
    const component = renderRoutes('/teams/1');

    expect(component.find(TeamView)).toHaveLength(1);
    expect(component.find(TableView)).toHaveLength(0);
    expect(component.find(WeeksView)).toHaveLength(0);
  });

  it('should render Weeks page', () => {
    const component = renderRoutes('/weeks/1');

    expect(component.find(WeeksView)).toHaveLength(1);
    expect(component.find(TeamView)).toHaveLength(0);
    expect(component.find(TableView)).toHaveLength(0);
  });

  it('should redirect /table when invalid path', () => {
    const component = renderRoutes('/weekssssss');

    expect(component.find(TableView)).toHaveLength(1);
  });*/
});

describe('App required elements', () => {
  /* let wrapper;

  beforeEach(() => {
    await act(async () => {
      wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
  });
*/
  it('should have a GlobalStyle', async () => {
    await act(async () => {
      const wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(GlobalStyle).length).toEqual(1);
    });
  });
  /* it('should have a Header', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });*/
});
