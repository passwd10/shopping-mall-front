import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Search from './Search';
import Menu from './Menu';
import { deleteSession } from '../services/loginService';

const Button = styled.li`
    display: inline-block;
    font-size: 14px;
    padding: 8px 12px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #6495ED;
    }
`;

const AllBtn = styled.div`
  display: flex;
  justify-content: flex-end;  
  width: 100%;
  padding: 8px 12px;
  background-color: #123;
  top: 0; left: 0; right: 0;
  color: #2b23;
  text-align: center;
`;

const Title = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
`;

const Img = styled.img`
    width: auto;
    height: auto;
    max-width: 170px;
    max-height: 150px;
`;

const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function AlwaysTop(props) {
  const [loginBtn, setLoginBtn] = useState('');
  const [cartLink, setCartLink] = useState('');
  const [myPageLink, setMyPageLink] = useState('');

  const linkToCart = '/cartList';
  const linkToMyPage = '/user/modify'
  const linkToLogin = '/user/login';

  const clearLoginState = () => {
    setLoginBtn('로그인');
    setCartLink(linkToLogin);
    setMyPageLink(linkToLogin);
    deleteSession();
    localStorage.removeItem('isLogin');
    props.loginCallBack('false');
  };

  const sendSearchKeywordToRoutes = (keyword) => {
    props.searchCallBack(keyword);
  };

  useEffect(() => {
    if (props.loginState === 'true' || localStorage.getItem('isLogin') === 'true') {
      setLoginBtn('로그아웃');
      setCartLink(linkToCart);
      setMyPageLink(linkToMyPage);
    } else {
      setLoginBtn('로그인');
      setCartLink(linkToLogin);
      setMyPageLink(linkToLogin);      
    } 
  }, [props.loginState]);

  return (
    <>
      <TopBar>
        <AllBtn>
          <Link to="/">
            <Button>홈으로</Button>
          </Link>
          {loginBtn === '로그인'
            ? <Link to="/user/login"><Button>{loginBtn}</Button></Link>
            : <Button onClick={clearLoginState}>{loginBtn}</Button>
          }
          <Link to={myPageLink}>
            <Button>마이페이지</Button>
          </Link>
          <Link to={cartLink}>
            <Button>장바구니</Button>
          </Link>
        </AllBtn>

        <Link to="/">
            <Title>
                <Img src="/../img/home-logo.png" />
            </Title>
        </Link>
        <Search searchCallBack={sendSearchKeywordToRoutes} />
      </TopBar>
      <Menu />
    </>
  );
}


export default AlwaysTop;
