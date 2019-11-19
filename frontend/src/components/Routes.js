import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Nut from '../Screens/Nut';
import KickBoard from '../Screens/KickBoard';
import Tea from '../Screens/Tea';
import Home from '../Screens/Home';
import Cosmetic from '../Screens/Cosmetic';

import Header from './Header';

export default () => (
    <Router>
        <Header />
        <Route path = "/category/group/1" component = {Nut}/>
        <Route path = "/category/group/2" component = {Tea}/>
        <Route path="/category/group/3" component={KickBoard}/>
        <Route path = "/category/group/4" component = {Cosmetic}/>
        <Route path = "/" component = {Home}/>
    </Router>
)