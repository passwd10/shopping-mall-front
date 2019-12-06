import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import DuplicateInspect from '../components/DuplicateInspect';
import CheckPassword from '../components/CheckPassword';
import SignUpValidation from '../components/SignUpValidation';
import PhoneNum from '../components/PhoneNum';
import Birth from '../components/Birth';
import UserName from '../components/UserName';
import userStore from '../stores/userStore';

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

        for( let [key, value] of Object.entries(allValid)) {
            if( value == true) {
                cntTrue ++;
            } 
        }

        console.log('cntTrue', cntTrue);

        if( cntTrue == 5) {
            setActiveButton(false);
        }

        if ( cntTrue != 5) {
            setActiveButton(true);
        }

    }, [allValid])

    return (
        <>
            <div>
                <h4>회원가입</h4>
                <form name="sign_up_form">
                    <table>
                        <tbody>
                            <DuplicateInspect onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                            <CheckPassword onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                            <UserName onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                            <PhoneNum onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                            <Birth onHandleChange={onHandleChange} allState={allState} onHandleValid={onHandleValid} />
                            <tr>
                                <td></td>
                                <td><input type="submit" name="submit" value="회원가입 완료" onClick={saveUserInfo} disabled={activeButton} /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

        </>
    )
}

export default SignUp;  