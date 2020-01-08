import React, { useState, useEffect } from 'react';

function CheckPassword({ onHandleChange, userInfo, onHandleValid }) {
    const [inspectPasswd, setInspectPasswd] = useState('');
    const [pwdNotice, setPwdNotice] = useState('');
    const [inspNotice, setInspNotice] = useState('');

    useEffect(() => {

        if (userInfo.password === inspectPasswd && userInfo.password.length > 5) {
            setInspNotice('비밀번호가 일치합니다.');
            onHandleValid({ passwordValid: true }, 'password');
        }

        if (userInfo.password.length === 0 && inspectPasswd.length === 0) {
            setInspNotice('');
            onHandleValid({ passwordValid: false }, 'password');
        }

        if (userInfo.password !== inspectPasswd) {
            setInspNotice('비밀번호가 일치하지 않습니다.');
            onHandleValid({ passwordValid: false }, 'password');
        }

    }, [inspectPasswd]);

    useEffect(() => {

        if (userInfo.password === inspectPasswd && userInfo.password.length > 5) {
            setInspNotice('비밀번호가 일치합니다.');
            onHandleValid({ passwordValid: true }, 'password');
        }

        if (userInfo.password.length > 5) {
            setPwdNotice('OK');
            onHandleValid({ passwordValid: false }, 'password');
        }

        if (userInfo.password.length < 5) {
            setPwdNotice('6자리 이상 입력해주세요.');
            onHandleValid({ passwordValid: false }, 'password');
        }

        if (userInfo.password.length === 0 && inspectPasswd.length === 0) {
            setInspNotice('');
            setPwdNotice('');
            onHandleValid({ passwordValid: false }, 'password');
        }

        if (userInfo.password !== inspectPasswd) {
            setInspNotice('비밀번호가 일치하지 않습니다.');
            onHandleValid({ passwordValid: false }, 'password');
        }
        
    }, [userInfo.password]);

    function handleChangeEvent(event) {
        onHandleChange({ password: event.target.value }, 'password');
    }

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 250px ', paddingTop: '5px' }}>
                <div>비밀번호</div>
                <div><input type="password" name="user_pw" placeholder="영문/숫자/특수문자 조합 6~15자" size="30"
                    value={userInfo.password} style={{width: '100%'}} onChange={handleChangeEvent} />{pwdNotice}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 250px ',paddingTop: '5px' }}>
                <div>비밀번호 확인</div>
                <div><input type="password" name="user_pw2" size="30" placeholder="비밀번호를 한번 더 입력해주세요"
                    value={inspectPasswd} style={{width: '100%'}} onChange={v => setInspectPasswd(v.target.value)} />{inspNotice}</div>
            </div>
        </>
    )
}

export default CheckPassword;