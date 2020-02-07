import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import TeamView from './components/views/TeamView';
import WeeksView from './components/views/WeeksView';
import TableView from './components/views/TableView';

const App = () => (
  <div>
    <Header />
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/weeks/:index" component={WeeksView} />
      <Route path="/teams/:index" component={TeamView} />
      <Route path="/table" component={TableView} />
      <Redirect from="/" to="/table" />
    </Switch>
    <GlobalStyle />
  </div>
);

export default App;
