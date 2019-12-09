import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import userStore from '../stores/userStore';
import ModifyName from '../modifyInfo/ModifyName';
import ModifyPhoneNum from '../modifyInfo/ModifyPhoneNum';
import ModifyUserId from '../modifyInfo/ModifyUserId';

function UserInfo() {
   
    // const [userId, setUserId] = useState(localStorage.getItem('userId'));
    // const [password, setPassword] = useState(localStorage.getItem('password'));
    // const [phoneNum, setPhoneNum] = useState(localStorage.getItem('phoneNum'));
    const [birth, setBirth] = useState(localStorage.getItem('birth'));

    console.log(localStorage);
    console.log(localStorage.getItem('userId'));
    
    return (
        <>
            <h4>회원정보 수정</h4>
            <h5>기본 정보</h5>
            
            <table>
                <tbody>
                    <ModifyName />
                    <ModifyUserId />
                    <ModifyPhoneNum />
                    <tr>
                        <td>생년월일</td>
                        <td>{birth}</td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
}

export default UserInfo;