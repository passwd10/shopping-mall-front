import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModifyDivGrid, {ModifyCategory, ModifyInfo} from '../lib/Div';
import ModifyBtn from '../lib/Button';

function ModifyUserId() {
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [button, setButton] = useState('아이디 변경')
    const [visible, setVisible] = useState(false);

    const onHandleModify = () => {
        setVisible(!visible);
        button == '아이디 변경' ? setButton('변경 취소') : setButton('아이디 변경');
    };

    const changeId = () => {
        localStorage['userId'] = userId;
        onHandleModify();
    }

    const showModify = (
    <ModifyInfo>
        <div></div>
        <div><input type='text' onChange={v => setUserId(v.target.value)} /></div>
        <div><ModifyBtn type='submit' onClick={changeId}>변경하기</ModifyBtn></div>
    </ModifyInfo>);

    return (
        <>
            <ModifyDivGrid>
                <ModifyCategory >아이디</ModifyCategory>
                <ModifyInfo>
                    <span style={{paddingRight: '20px'}}>{localStorage['userId']}</span>
                    <span><ModifyBtn onClick={onHandleModify}>{button}</ModifyBtn></span>
                    {visible == true ? showModify : null}
                </ModifyInfo>
            </ModifyDivGrid>
        
        </>
    );
}

export default ModifyUserId;