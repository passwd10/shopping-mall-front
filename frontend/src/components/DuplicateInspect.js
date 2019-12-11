import React, { useState } from 'react';

import userStore from '../stores/userStore';

function DuplicateInspect({ onHandleChange, allState, onHandleValid }) { //아이디 중복 검사
    const [writeDoc, setWriteDoc] = useState('중복검사 버튼을 눌러주세요.');

    let isDup = false;

    const isDuplicate = event => {
        event.preventDefault();
        event.stopPropagation();

        userStore.userLists.map(userList => {
            if (userList.loginId === allState.userId) {
                isDup = true;
            }
        });

        if (isDup == true) {
            setWriteDoc('중복된 아이디 입니다.')
            onHandleValid({ userIdValid: false }, 'userId');
        } else {
            setWriteDoc('사용 가능한 아이디 입니다.');
            onHandleValid({ userIdValid: true }, 'userId');
        }
    };

    function handleChangeEvent(event) {
        onHandleChange({ userId: event.target.value }, 'userId' );
    }

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 160px 100px' }}>
                <div>아이디</div>
                <div><input type="text" value={allState.userId} style={{width: '100%'}} onChange={handleChangeEvent} /></div>
                <div><button onClick={isDuplicate}>중복검사</button></div>
            </div>
            <div>{writeDoc}</div>

        </>
    )
}

export default DuplicateInspect;