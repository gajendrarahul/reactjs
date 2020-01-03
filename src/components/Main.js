import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Resume from './Resume';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/About" component={About} />
        <Route path ="/Profile" component={Profile} />
        <Route path ="/Resume" component={Resume} />
        <Route path ="/Contact" component={Contact} />
    </Switch>
)
export default Main;