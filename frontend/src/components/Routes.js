import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Nut from '../Category/Nut';
import Sports from '../Category/Sports';
import Drink from '../Category/Drink';
import Home from '../Category/Home';
import Cosmetic from '../Category/Cosmetic';

import ProductDetail from '../pages/ProductDetail'
import ProductNew from '../pages/ProductNew';
import Header from './Header';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path = "/product/new">
                <ProductNew />
            </Route>
            <Route path = "/product/:productId">
                <ProductDetail />
            </Route>
            <Route path = "/category/group/1" >
                <Nut /> 
            </Route>
            <Route path = "/category/group/2">
                <Drink />
            </Route> 
            <Route path="/category/group/3">
                <Sports />
            </Route>
            <Route path = "/category/group/4">
                <Cosmetic />
            </Route>
            <Route path = "/">
                <Home />
            </Route>
        </Switch>
    </Router>
);