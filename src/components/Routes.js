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
import Footer from '../components/Footer';

function Routes() {
  const [searchKeyword, setSearchKeyword] = useState('');

  let searchCallBack = (value) => setSearchKeyword(value);

  return (
    <>
      <Router>
        <Switch>
          <Route path='/order/purchaseRequest/:productId'>
            <PurchaseProduct />
          </Route>
          <Route path='/cartList'>
            <ProductCartList />
          </Route>
          <Route path='/product/new'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <ProductNew />
          </Route>
          <Route path='/product/:productId'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <ProductDetail />
          </Route>
          <Route path='/category/group/:groupId'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <ProductList />
          </Route>
          <Route path='/products/search'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <SearchResult keyword={searchKeyword} />
          </Route>
          <Route path='/user/login'>
            <Login />
          </Route>
          <Route path='/user/join'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <SignUp />
          </Route>
          <Route path='/user/modify'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <UserInfo />
          </Route>
          <Route path='/mypage/buylist'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <MyPage />
          </Route>
          <Route path='/'>
            <AlwaysTop searchCallBack={searchCallBack} />
            <Home />
            <ProductList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Routes;
