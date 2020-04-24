import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';

const index = () => (
  <Switch>
    <Route exact path='/about' component={About} />
    <Route exact path='/' component={Home} />
  </Switch>
);

export default index;
