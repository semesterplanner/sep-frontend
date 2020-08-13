import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../App.css';

import { Header } from './Header/Header';
import { Home } from './Pages/Home';
import { MyPlans } from './Pages/MyPlans';
import { Planner } from './Pages/Planner';
import { Login } from './Login/Login';

/** The App that gets loaded on site
* @return {void}
*/
export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/myplans' component={MyPlans}/>
        <Route path='/planner' component={Planner}/>
      </Switch>
    </Router>
  );
};
