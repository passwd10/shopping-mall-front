import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CheckIdDuplicate from '../components/CheckIdDuplicate';
import CheckPassword from '../components/CheckPassword';
import SignUpValidation from '../components/SignUpValidation';
import PhoneNum from '../components/PhoneNum';
import Birth from '../components/Birth';
import UserName from '../components/UserName';

import { signUpUser } from '../services/signUpService';

const SignUpHeader = styled.span`
    display: block;
    /* background-color: #F9F9F9; */
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

    const [activeButton, setActiveButton] = useState(true);

    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: '',
        name: '',
        phoneNum: '',
        birth: '',
    });

    const [allValid, setAllValid] = useState({
        userIdValid: false,
        passwordValid: false,
        nameValid: false,
        phoneNumValid: false,
        birthValid: false,
    })

    const onHandleChange = ({ userId, password, name, phoneNum, birth }, value) => {

        if (value == 'birth') {
            setUserInfo({ ...userInfo, birth });
        }

        if (value == 'userId') {
            setUserInfo({ ...userInfo, userId });
        }

        if (value == 'name') {
            setUserInfo({ ...userInfo, name });
        }

        if (value == 'password') {
            setUserInfo({ ...userInfo, password });
        }

        if (value == 'phoneNum') {
            setUserInfo({ ...userInfo, phoneNum });
        }

    };

    const onHandleValid = ({ userIdValid, passwordValid, nameValid, phoneNumValid, birthValid }, value) => {
        if (value == 'birth') {
            setAllValid({ ...allValid, birthValid });
        }

        if (value == 'userId') {
            setAllValid({ ...allValid, userIdValid });
        }

        if (value == 'name') {
            setAllValid({ ...allValid, nameValid });
        }

        if (value == 'password') {
            setAllValid({ ...allValid, passwordValid });
        }

        if (value == 'phoneNum') {
            setAllValid({ ...allValid, phoneNumValid });
        }
    };

    const saveUserInfo = event => {
        event.preventDefault();
        event.stopPropagation();

        signUpUser(userInfo);
    };

    useEffect(() => {
        let cntTrue = 0;

        for (let [key, value] of Object.entries(allValid)) {
            if (value == true) {
                cntTrue++;
            }
        }

        console.log('cntTrue', cntTrue);

        if (cntTrue == 5) {
            setActiveButton(false);
        }

        if (cntTrue != 5) {
            setActiveButton(true);
        }

    }, [allValid])

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%',  backgroundColor: '#F9F9F9'}}>
                <div style={{ flex: '1', overflow: 'auto', paddingBottom: '100px' }}>
                    <SignUpHeader>회원가입</SignUpHeader>
                    <SignUpForm name="sign_up_form">
                            <div>
                                <CheckIdDuplicate onHandleChange={onHandleChange} userInfo={userInfo} onHandleValid={onHandleValid} />
                                <CheckPassword onHandleChange={onHandleChange} userInfo={userInfo} onHandleValid={onHandleValid} />
                                <UserName onHandleChange={onHandleChange} userInfo={userInfo} onHandleValid={onHandleValid} />
                                <PhoneNum onHandleChange={onHandleChange} userInfo={userInfo} onHandleValid={onHandleValid} />
                                <Birth onHandleChange={onHandleChange} userInfo={userInfo} onHandleValid={onHandleValid} />
                                <div>
                                    <div></div>
                                    <div><SignUpBtn type="submit" name="submit" value="회원가입 완료" onClick={saveUserInfo} disabled={activeButton} /></div>
                                </div>
                            </div>
                    </SignUpForm>
                </div>
            </div>
        </>
    )
}

export default SignUp;  