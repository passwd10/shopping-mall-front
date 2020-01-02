import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DuplicateInspect from '../components/DuplicateInspect';
import CheckPassword from '../components/CheckPassword';
import SignUpValidation from '../components/SignUpValidation';
import PhoneNum from '../components/PhoneNum';
import Birth from '../components/Birth';
import UserName from '../components/UserName';
// import userStore from '../stores/userStore';

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

    const [allState, setAllState] = useState({
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
            setAllState({ ...allState, birth });
        }

        if (value == 'userId') {
            setAllState({ ...allState, userId });
        }

        if (value == 'name') {
            setAllState({ ...allState, name });
        }

        if (value == 'password') {
            setAllState({ ...allState, password });
        }

        if (value == 'phoneNum') {
            setAllState({ ...allState, phoneNum });
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

        // userStore.createUserList(allState.userId, allState.password, allState.name, allState.phoneNum, allState.birth);
        userStore.createUserList(allState);
        console.log('유저정보', userStore.userLists);
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
                                <DuplicateInspect onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                                <CheckPassword onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                                <UserName onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                                <PhoneNum onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                                <Birth onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
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