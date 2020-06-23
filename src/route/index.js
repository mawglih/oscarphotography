import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Prices from '../components/Prices';
import Home from '../components/Home';
import Contactus from '../components/Contactus';

const index = () => (
  <Switch>
    <Route exact path='/reviews' component={Reviews} />
    <Route exact path='/prices' component={Prices} />
    <Route exact path='/contact' component={Contactus} />
    <Route exact path='/' component={Home} />
  </Switch>
);

export default index;
