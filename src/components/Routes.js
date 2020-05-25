import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
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
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

function Routes() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loginState, setLoginState] = useState('');

  let searchCallBack = (value) => setSearchKeyword(value);
  const loginCallBack = (value) => setLoginState(value);
  return (
    <>
      <Router>
        <AlwaysTop 
          searchCallBack={searchCallBack}
          loginState={loginState}
          loginCallBack={loginCallBack} />
        <Switch>
          <Route path='/order/purchaseRequest/:productId'>
            <PurchaseProduct />
          </Route>
          <Route path='/cartList'>
            <ProductCartList />
          </Route>
          <Route path='/product/new'>
            <ProductNew />
          </Route>
          <Route path='/product/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/category/group/:groupId'>
            <ProductList />
          </Route>
          <Route path='/products/search'>
            <SearchResult keyword={searchKeyword} />
          </Route>
          <Route path='/user/login'>
            <Login loginCallBack={loginCallBack} />
          </Route>
          <Route path='/user/join'>
            <SignUp />
          </Route>
          <Route path='/user/modify'>
            <UserInfo />
            <MyPage />
          </Route>
          <Route exact path='/'>
            <Home />
            <ProductList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Routes;
