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
import ProductCartList from '../pages/ProductCartList';

export default () => (
    <>
        <Router>
            <Switch>
                <Route path="/order/purchaseRequest/:productId">
                    <PurchaseProduct />
                </Route>
                <Route path="/cartList">
                    <ProductCartList />
                </Route>
                <Route path="/product/new">
                    <AlwaysTop />
                    <ProductNew />
                </Route>
                <Route path="/product/:productId">
                    <AlwaysTop />
                    <ProductDetail />
                </Route>
                <Route path="/category/group/:groupId">
                    <AlwaysTop />
                    <ProductList />
                </Route>
                <Route path="/search/:keyword">
                    <AlwaysTop />
                    <SearchResult />
                </Route>
                <Route path="/">
                    <AlwaysTop />
                    <Home />
                </Route>
            </Switch>
        </Router>
    </>
);