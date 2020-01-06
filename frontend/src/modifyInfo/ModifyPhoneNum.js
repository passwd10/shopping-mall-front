import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModifyDivGrid, {ModifyCategory, ModifyInfo} from '../lib/Div';
import ModifyBtn from '../lib/Button';
import ModifyNotice from '../lib/Notice';

import { getUserInfo, patchUserInfo } from '../services/userInfoService';

function ModifyPhoneNum() {
    const [phoneNum, setPhoneNum] = useState('');
    const [inputPhoneNum, setInputPhoneNum] = useState('');
    const [button, setButton] = useState('번호 변경')
    const [visible, setVisible] = useState(false);
    const [notice, setNotice] = useState('');

    (async () => 
        await getUserInfo().then(v => setPhoneNum(v[0].phoneNum))
    )();

    const onHandleModify = () => {
        setVisible(!visible);
        button == '번호 변경' ? setButton('변경 취소') : setButton('번호 변경');
    };

    const changePhoneNum = () => {

        if (inputPhoneNum.length != 11) {
            console.log('phoneNum', inputPhoneNum);
            setNotice('11자리를 입력해주세요');
        }

        if (inputPhoneNum.length == 11) {
            setNotice('');
            patchUserInfo('phoneNum', inputPhoneNum);
            setPhoneNum(inputPhoneNum);
            onHandleModify();
        }
    }

    const handleChange = e => {
        setInputPhoneNum(e.target.value);
    }

    const showModify = (
    <ModifyInfo>
        <div></div>
        <div><input type='text' value={inputPhoneNum} onChange={handleChange} /></div>
        <div>
            <ModifyBtn type='submit' onClick={changePhoneNum}>변경하기</ModifyBtn>
            <ModifyNotice>{notice}</ModifyNotice>
        </div>
    </ModifyInfo>);

    return (
        <>
            <ModifyDivGrid>
                <ModifyCategory >휴대폰 번호</ModifyCategory>
                <ModifyInfo>
                    <span style={{paddingRight: '20px'}}>{phoneNum}</span>
                    <span><ModifyBtn onClick={onHandleModify}>{button}</ModifyBtn></span>
                    {visible == true ? showModify : null}
                </ModifyInfo>
            </ModifyDivGrid>
        </>
    );
}

export default ModifyPhoneNum;