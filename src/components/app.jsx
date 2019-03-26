import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard/dashboard.jsx';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </div>
);

export default App;
