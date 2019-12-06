import React, { useState } from 'react';
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
import Login from '../pages/Login';
import MyPage from '../pages/MyPage';
import SignUp from '../pages/SignUp';
import UserInfo from '../pages/UserInfo';

function Routes() {

    return (
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
                    <Route path='/user/login'>  
                        <Login />
                    </Route>
                    <Route path='/user/join'>
                        <AlwaysTop />
                        <SignUp />
                    </Route>
                    <Route path="/user/modify">
                        <AlwaysTop />
                        <UserInfo />
                    </Route>
                    <Route path='/mypage/buylist'>
                        <AlwaysTop />
                        <MyPage />
                    </Route>
                    <Route path="/">
                        <AlwaysTop />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes;