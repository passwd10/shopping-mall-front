import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

function AlwaysTop() {

    return (
        <>
            <Link to='/'>
                <img src='/../img/home.jpg' width='5%'></img>
            </Link>
            <Link to='/user/login'>
                <button>로그인</button>
            </Link>
            <Link to='/user/join'>
                <button>회원가입</button>
            </Link>
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