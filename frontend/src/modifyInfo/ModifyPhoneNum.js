import React, { useState, useEffect } from 'react';

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
    <tr>
        <td></td>
        <td><input type='text' onChange={v => setPhoneNum(v.target.value)} /></td>
        <td><button type='submit' onClick={changePhoneNum}>변경하기</button>{notice}</td>
    </tr>);

    return (
        <>
            <tr>
                <td>휴대폰 번호</td>
                <td>{localStorage['phoneNum']}</td>
                <td><button onClick={onHandleModify}>{button}</button></td>
            </tr>
            {visible == true ? showModify : null}
        </>
    );
}

export default ModifyPhoneNum;