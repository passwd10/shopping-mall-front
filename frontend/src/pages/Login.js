import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import userList from '../stores/userStore';
import getUserInfo from '../service/loginService';

const LoginHeader = styled.span`
    display: block;
    padding: 20px;
    padding-top: 100px;
    color: #333;
    font-size: 40px;
    text-align: center;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
`;

const LoginForm = styled.form`
    width: 40%;
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 50px;
    background-color: white;
`;

const LoginBtn = styled.button`
    color: white;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #EE5555;
    border: 1px solid #EE5555;
    font-size: 20px;
    padding: 10px;
    padding-left: 140px;
    padding-right: 140px;
`;

const Input = styled.input`
    width: 340px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    margin: 2px;
`;

const Button = styled.button`
    color: #333;
    background-color: white;
    border: none;
    margin: 10px;
`;

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [warningState, setWarningState] = useState('');
    const [loginAvailable, setLoginAvailable] = useState(false);

    const checkLogin = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        getUserInfo(id, password).then(v => {
            
            localStorage.setItem('name', v.userInfo[0].name);
            localStorage.setItem('userId', v.userInfo[0].userId);
            localStorage.setItem('password', v.userInfo[0].password);
            localStorage.setItem('phoneNum', v.userInfo[0].phoneNum);
            localStorage.setItem('birth', v.userInfo[0].birth);
            setLoginAvailable(true);
        })

        // console.log('사용자정보', localStorage);
    };

    return (
        !loginAvailable ?
            <div style={{ backgroundColor: '#F9F9F9', minHeight: '750px' }}>
                <LoginHeader>로그인</LoginHeader>
                <LoginForm id='Login-form' onSubmit={checkLogin}>
                    <div>
                        <Input type='text' name='myId' onChange={v => setId(v.target.value)} value={id} placeholder='아이디를 입력하세요' />
                    </div>
                    <div>
                        <Input type='password' name='myPassword' onChange={v => setPassword(v.target.value)} value={password} placeholder='비밀번호를 입력하세요' />
                    </div>
                    <div>
                        {warningState}
                    </div>
                    <div>
                        <LoginBtn type='submit'>로그인</LoginBtn>
                    </div>
                    <div>
                        <Button>아이디 찾기</Button>
                        <Button>비밀번호 찾기</Button>
                        <Link to='/user/join'>
                            <Button>회원가입</Button>
                        </Link>
                    </div>
                </LoginForm>
            </div> :
            <Redirect to='/' />
        // history.pushState(null,'', '/')
    )
}

export default Login;