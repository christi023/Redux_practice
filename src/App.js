import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages components
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
