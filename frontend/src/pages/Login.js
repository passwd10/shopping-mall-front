import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function Login () {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [warningState, setWarningState] = useState('');
    const [loginState, setLoginState] = useState(false);

    const checkLogin = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if(id == 'hi' && password == '123') {
            setLoginState(true);
        } else {
            setWarningState('아이디 비밀번호가 일치하지 않습니다.');
        }
    };

    console.log('loginState', loginState);

    return (
        !loginState ?
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
    )
}

export default Login;