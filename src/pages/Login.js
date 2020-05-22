import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { getSession } from '../services/loginService';

const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginHeader = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;

const LoginForm = styled.form`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  background-color: white;
`;

const LoginInputDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const LoginInput = styled.input`
  width: 340px;
  height: 50px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px #B0C4DE solid;
  margin: 2px;
`;

const LoginBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignInBtn = styled.button`
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  background-color: #6495ED;
  font-size: 20px;
  width: 350px;
  height: 50px;
`;

const SignUpBtn = styled.button`
  color: white;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #6495ED;
  font-size: 20px;
  width: 350px;
  height: 50px;
`;

function Login(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [warningState, setWarningState] = useState('');
  const [loginAvailable, setLoginAvailable] = useState(false);

  const checkLogin = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    getSession(id, password).then(v => {
      if (v.isLogin === true) {
        setLoginAvailable(true);
        localStorage.setItem('isLogin', v.isLogin);
        props.loginCallBack('true');
      } else {
        console.log('v.isLogin === false')
        setWarningState('아이디 비밀번호가 일치하지 않습니다.');
        props.loginCallBack('false');
      }
    })
  };

  return (
    !loginAvailable ?
      <LoginBody>
        <LoginHeader>로그인</LoginHeader>
        <LoginForm id='Login-form' onSubmit={checkLogin}>
          <LoginInputDiv>
            <LoginInput type='text'
              name='myId'
              onChange={v => setId(v.target.value)}
              value={id}
              placeholder='아이디를 입력하세요'/>
            <LoginInput type='password'
              name='myPassword'
              onChange={v => setPassword(v.target.value)}
              value={password}
              placeholder='비밀번호를 입력하세요' />
            <p>{warningState}</p>
          </LoginInputDiv>
          <LoginBtnDiv>
            <SignInBtn type='submit'>로그인</SignInBtn>
            <Link to='/user/join'>
              <SignUpBtn>회원가입</SignUpBtn>
            </Link>
          </LoginBtnDiv>
        </LoginForm>
      </LoginBody> :
      <Redirect to='/' />
  )
}

export default Login;