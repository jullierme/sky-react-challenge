import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Team from './components/Team';
import Weeks from './components/Weeks';
import Table from './components/Table';

const App = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/weeks/:index" component={Weeks} />
        <Route path="/teams/:index" component={Team} />
        <Route path="/table" component={Table} />
        <Redirect from="/" to="/weeks/1" />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
