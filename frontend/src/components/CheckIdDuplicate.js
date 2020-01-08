import React, { useState } from 'react';

import { checkIdDuplicate } from '../services/signUpService';

function CheckIdDuplicate({ onHandleChange, userInfo, onHandleValid }) { //아이디 중복 검사
    const [notice, setNotice] = useState('중복검사 버튼을 눌러주세요.');

    const isDuplicate = async event => {
        event.preventDefault();
        event.stopPropagation();

        const isDup = await checkIdDuplicate(userInfo.userId);

        if (isDup === true) {
            setNotice('중복된 아이디 입니다.')
            onHandleValid({ userIdValid: false }, 'userId');
        } else {
            setNotice('사용 가능한 아이디 입니다.');
            onHandleValid({ userIdValid: true }, 'userId');
        }
    };

    function handleChangeEvent(event) {
        onHandleChange({ userId: event.target.value }, 'userId');
    }

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 160px 100px' }}>
                <div>아이디</div>
                <div><input type="text" value={userInfo.userId} style={{ width: '100%' }} onChange={handleChangeEvent} /></div>
                <div><button onClick={isDuplicate}>중복검사</button></div>
            </div>
            <div>{notice}</div>

        </>
    )
}

export default CheckIdDuplicate;
