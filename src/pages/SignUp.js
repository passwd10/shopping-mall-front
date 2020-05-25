import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import CheckIdDuplicate from '../components/CheckIdDuplicate';
import CheckPassword from '../components/CheckPassword';
import PhoneNum from '../components/PhoneNum';
import Birth from '../components/Birth';
import UserName from '../components/UserName';
import Modal from '../components/Modal';

import { signUpUser } from '../services/signUpService';

const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F0FFFF;
  padding: 50px 20px;
  width: 100%;
`

const SignUpHeader = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;

const SignUpForm = styled.form`
  width: 600px;
  padding: 50px;
  text-align: center;
  margin-top: 30px;
  background-color: white;
`;

const SignUpBtn = styled.input`
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  background-color: #6495ED;
  font-size: 20px;
  width: 350px;
  height: 50px;
  &: disabled {
    background-color: gray;
  }
`;

function SignUp() {
  const [isValid, setIsValid] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: '',
    password: '',
    name: '',
    phoneNum: '',
    birth: '',
  });
  const [validCondition, setValidCondition] = useState({
    validUserId: false,
    validPassword: false,
    validName: false,
    validPhoneNum: false,
    validBirth: false,
  })
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsValid(isValidForm());
  }, [validCondition])

  const isValidForm = () =>
    Object.entries(validCondition)
      .map(second)
      .every(isTrue);

  const onHandleChange = (property) =>
    (value) => setUserInfo({ ...userInfo, [property]: value });

  const onHandleValid = (property) =>
    (valid) => setValidCondition({ ...validCondition, [property]: valid });

  const signup = event => {
    event.preventDefault();
    event.stopPropagation();

    signUpUser(userInfo);
    setShowModal(true);
  };

  const second = (arr) => arr[1];
  const isTrue = (value) => value === true;

  return (
    <SignUpDiv>
      {showModal === true && <Modal name={userInfo.name} userId={userInfo.userId}/>}
      <SignUpHeader>회원가입</SignUpHeader>
      <SignUpForm>
        <CheckIdDuplicate
          userInfo={userInfo}
          onHandleChange={onHandleChange('userId')}
          onHandleValid={onHandleValid('validUserId')} />
        <CheckPassword
          userInfo={userInfo}
          onHandleChange={onHandleChange('password')}
          onHandleValid={onHandleValid('validPassword')} />
        <UserName
          userInfo={userInfo}
          onHandleChange={onHandleChange('name')}
          onHandleValid={onHandleValid('validName')} />
        <PhoneNum
          userInfo={userInfo}
          onHandleChange={onHandleChange('phoneNum')}
          onHandleValid={onHandleValid('validPhoneNum')} />
        <Birth
          userInfo={userInfo}
          onHandleChange={onHandleChange('birth')}
          onHandleValid={onHandleValid('validBirth')} />
        <SignUpBtn
          value="회원가입 완료"
          onClick={signup}
          disabled={!isValid}
          type="submit" />
      </SignUpForm>
    </SignUpDiv>
  )
}

export default SignUp;  