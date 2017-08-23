import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

export const makeMainRoutes = () => {
  /* The div element is there cause react-router-dom is funny and can only have one child, it can have a lot of children */
  return (
    <Router component={App} forceRefresh={true}>
      <div>
        <App/>
        <Route exact path="/" />
        <Route path="/search/:filter" />
      </div>
    </Router>
  );
};