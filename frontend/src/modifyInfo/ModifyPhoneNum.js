import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModifyDivGrid, {ModifyCategory, ModifyInfo} from '../lib/Div';
import ModifyBtn from '../lib/Button';
import ModifyNotice from '../lib/Notice';

function ModifyPhoneNum() {
    const [phoneNum, setPhoneNum] = useState(localStorage.getItem('phoneNum'));
    const [button, setButton] = useState('번호 변경')
    const [visible, setVisible] = useState(false);
    const [notice, setNotice] = useState('');

    const onHandleModify = () => {
        setVisible(!visible);
        button == '번호 변경' ? setButton('변경 취소') : setButton('번호 변경');
    };

    const changePhoneNum = () => {

        if (phoneNum.length != 11) {
            setNotice('11자리를 입력해주세요');
        }

        if (phoneNum.length == 11) {
            setNotice('');
            localStorage['phoneNum'] = phoneNum;
            onHandleModify();
        }
    }

    const showModify = (
    <ModifyInfo>
        <div></div>
        <div><input type='text' onChange={v => setPhoneNum(v.target.value)} /></div>
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
                    <span style={{paddingRight: '20px'}}>{localStorage['phoneNum']}</span>
                    <span><ModifyBtn onClick={onHandleModify}>{button}</ModifyBtn></span>
                    {visible == true ? showModify : null}
                </ModifyInfo>
            </ModifyDivGrid>
        </>
    );
}

export default ModifyPhoneNum;