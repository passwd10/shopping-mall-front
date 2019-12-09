import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import userList from '../stores/userStore';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [warningState, setWarningState] = useState('');
    const [loginAvailable, setLoginAvailable] = useState(false);

    const checkLogin = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        userList.userLists.map(user => {
            if (id == user.userId && password == user.password) {
                localStorage.setItem('name', user.name);
                localStorage.setItem('userId', user.userId);
                localStorage.setItem('password', user.password);
                localStorage.setItem('phoneNum', user.phoneNum);
                localStorage.setItem('birth', user.birth);
                setLoginAvailable(true);
            } else {
                setWarningState('아이디 비밀번호가 일치하지 않습니다.');
            }
        })

        console.log('사용자정보', localStorage);
    };

    return (
        !loginAvailable ?
            <>
                <h1>로그인</h1>
                <form id='Login-form' onSubmit={checkLogin}>
                    <div>
                        <label>아이디</label>
                        <input type='text' name='myId' onChange={v => setId(v.target.value)} value={id} />
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type='password' name='myPassword' onChange={v => setPassword(v.target.value)} value={password} />
                    </div>
                    <div>
                        {warningState}
                    </div>
                    <div>
                        <button type='submit'>로그인</button>
                    </div>
                    <button>아이디 찾기</button>
                    <button>비밀번호 찾기</button>
                    <Link to='/user/join'>
                        <button>회원가입</button>
                    </Link>
                </form>
            </> :
            <Redirect to='/' />
        // history.pushState(null,'', '/')
    )
}

export default Login;