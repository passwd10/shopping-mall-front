import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

function AlwaysTop() {

    const [loginState, setLoginState] = useState(localStorage.getItem('userInfo'));
    const [btnState, setBtnState] = useState('로그인');

    console.log('AlwaysTop', localStorage.getItem('userInfo'));

    const clearLoginState = () => {
        setLoginState(localStorage.clear());
    }

    useEffect(() => {
        setLoginState(localStorage.getItem('userInfo'));

        if ( loginState != null) {
            setBtnState('로그아웃');
        }

    }, [loginState]);

    return (
        <>
            <Link to='/'>
                <img src='/../img/home.jpg' width='5%'></img>
            </Link>
            {
                loginState == null ?
                    <Link to='/user/login'><button>로그인</button></Link> :
                    <button onClick={clearLoginState}>로그아웃</button>
            }
            <Link to='/mypage/qna'>
                <button>고객센터</button>
            </Link>
            <Link to='/mypage/buylist'>
                <button>마이페이지</button>
            </Link>
            <Link to='/cartlist'>
                <button>장바구니</button>
            </Link>

            <h1>온라인 쇼핑몰</h1>
            <Search />
        </>
    );
}

export default AlwaysTop;