import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import userStore from '../stores/userStore';
import ModifyName from '../modifyInfo/ModifyName';
import ModifyPhoneNum from '../modifyInfo/ModifyPhoneNum';
import ModifyUserId from '../modifyInfo/ModifyUserId';

import ModifyDivGrid, {ModifyCategory, ModifyInfo, BasicForm} from '../lib/Div';
import ModifyBtn from '../lib/Button';

function UserInfo() {
   
    // const [userId, setUserId] = useState(localStorage.getItem('userId'));
    // const [password, setPassword] = useState(localStorage.getItem('password'));
    // const [phoneNum, setPhoneNum] = useState(localStorage.getItem('phoneNum'));
    const [birth, setBirth] = useState(localStorage.getItem('birth'));

    console.log(localStorage);
    console.log(localStorage.getItem('userId'));
    
    return (
        <BasicForm>
            <h2 style={{fontWeight: "bold"}}>회원정보 수정</h2>
            <h5>기본 정보</h5>
            <div>    
                    <ModifyName />
                    <ModifyUserId />
                    <ModifyPhoneNum />
                    <ModifyDivGrid>
                        <ModifyCategory>생년월일</ModifyCategory>
                        <ModifyInfo>{birth}</ModifyInfo>
                    </ModifyDivGrid>
            </div>           
        </BasicForm>
    )
}

export default UserInfo;