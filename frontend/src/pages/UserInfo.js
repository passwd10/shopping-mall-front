import React, { useState } from 'react';

import ModifyName from '../modifyInfo/ModifyName';
import ModifyPhoneNum from '../modifyInfo/ModifyPhoneNum';
import ModifyUserId from '../modifyInfo/ModifyUserId';

import ModifyDivGrid, {ModifyCategory, ModifyInfo, BasicForm} from '../lib/Div';

import { getUserInfo } from '../services/userInfoService';

function UserInfo() {
   
    const [birth, setBirth] = useState('');

    (async () => 
        await getUserInfo().then(v => setBirth(v[0].birth))
    )();

    return (
        <BasicForm>
            <h2 style={{ fontWeight: "bold" }}>회원정보 수정</h2>
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