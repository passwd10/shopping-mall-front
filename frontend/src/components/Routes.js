import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from '../pages/Home';

import ProductDetail from '../pages/ProductDetail'
import ProductNew from '../pages/ProductNew';
import Category from '../pages/Category';
import SearchResult from './SearchResult';
import AlwaysTop from '../components/AlwaysTop';

export default () => (
    <>
        <Router>
            <AlwaysTop />
            <Switch>
                <Route path="/product/new">
                    <ProductNew />
                </Route>
                <Route path="/product/:productId">
                    <ProductDetail />
                </Route>
                <Route path="/category/group/:groupId">
                    <Category />
                </Route>
                <Route path="/search/:keyword">
                    <SearchResult />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </>
);