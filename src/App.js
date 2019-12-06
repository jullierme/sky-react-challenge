import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Team from './components/views/Team';
import Weeks from './components/views/Weeks';
import Table from './components/views/Table';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/weeks/:index" component={Weeks} />
      <Route path="/teams/:index" component={Team} />
      <Route path="/table" component={Table} />
      <Redirect from="/" to="/table" />
    </Switch>
    <GlobalStyle />
  </div>
);

export default App;
