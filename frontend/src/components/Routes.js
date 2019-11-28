import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from '../pages/Home';

import ProductDetail from '../pages/ProductDetail'
import ProductNew from '../pages/ProductNew';
import ProductList from '../pages/ProductList';
import SearchResult from './SearchResult';
import AlwaysTop from '../components/AlwaysTop';
import PurchaseProduct from '../pages/PurchaseProduct';

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
                    <ProductList />
                </Route>
                <Route path="/search/:keyword">
                    <SearchResult />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/order/purchaseRequest">
                    <PurchaseProduct />
                </Route>
            </Switch>
        </Router>
    </>
);