import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Search from './Search';
import Menu from '../components/Menu';
import { deleteSession } from '../services/loginService';

const Button = styled.li`
    display: inline-block;
    font-size: 10px;
    padding: 5px;
    min-width: 70px;
    text-align: center;
    color: black;
    /* width: 5%; */
    height: auto;
    font-weight: 600;
    /* border: 1px solid #3b2; */
    /* -webkit-appearance: none; */
    /* border: 0; */
    cursor: pointer;
    &:focus {
      outline: none;
    }
    background-color: white; 
`

const AllBtn = styled.div`
    width: 100%;
    height: 0 auto; 
    top: 0; left: 0; right: 0;
    color: #2b23;

    text-align: right;
`;

const Title = styled.h1`
    text-align: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
    /* top: 100px; left: 0; */
    /* position: fixed; */
`

const Img = styled.img`
    width: auto;
    height: auto;
    max-width: 200px;
     max-height: 150px;
`

const TopBar = styled.div`
    width: 1120px;
    max-width: none !important;
    height: 150px;

    /* top: 0; left: 0; right: 0px; */
    margin: 0 auto;
 
`;


function AlwaysTop() {

    const [cookie, setCookie] = useState(document.cookie.split('=')[1]);
    const [btnState, setBtnState] = useState('로그인');

    const clearLoginState = () => {
        setCookie("");
        deleteSession();
    }

    useEffect(() => {
        setCookie(document.cookie.split('=')[1]);

        if (document.cookie != [""]) {
            setBtnState('로그아웃');
        }

    }, [cookie]);

    return (
        <>
            <TopBar>
                <AllBtn>
                    <Link to='/'>
                        <Button>홈으로</Button>
                    </Link>
                    {
                        cookie == null ?
                            <Link to='/user/login'><Button>로그인</Button></Link> :
                            <Button onClick={clearLoginState}>로그아웃</Button>
                    }
                    <Link to='/mypage/qna'>
                        <Button>고객센터</Button>
                    </Link>
                    <Link to='/mypage/buylist'>
                        <Button>마이페이지</Button>
                    </Link>
                    <Link to='/cartlist'>
                        <Button>장바구니</Button>
                    </Link>
                </AllBtn>

                <Link to='/'><Title><Img src='/../img/logo.jpg' /></Title></Link>
                <Search />
            </TopBar>
            <Menu />
        </>
    );
}


export default AlwaysTop;