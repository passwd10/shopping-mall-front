import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import CheckIdDuplicate from '../components/CheckIdDuplicate';
import CheckPassword from '../components/CheckPassword';
import PhoneNum from '../components/PhoneNum';
import Birth from '../components/Birth';
import UserName from '../components/UserName';

import { signUpUser } from '../services/signUpService';

const SignUpHeader = styled.span`
    display: block;
    color: #333;
    font-size: 40px;
    padding: 20px;
    text-align: center;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
`;

const SignUpForm = styled.form`
    width: 600px;
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 50px;
    background-color: white;
`;

const SignUpBtn = styled.input`
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
    };

    const second = (arr) => arr[1];

    const isTrue = (value) => value === true;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingBottom: '100px', backgroundColor: '#F9F9F9' }}>
            <SignUpHeader>회원가입</SignUpHeader>
            <SignUpForm name="sign_up_form">
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
        </div>
    )
}

export default SignUp;  