import React, { useState, useEffect } from 'react';

function ModifyPhoneNum() {
    const [phoneNum, setPhoneNum] = useState(localStorage.getItem('phoneNum'));
    const [button, setButton] = useState('번호 변경')
    const [visible, setVisible] = useState(false);

    const onHandleModify = () => {
        setVisible(!visible);
        button == '번호 변경' ? setButton('변경 취소') : setButton('번호 변경');
    };

    const showModify = (
    <tr>
        <td></td>
        <td><input type='text' /></td>
        <td><button>변경하기</button></td>
    </tr>);

    return (
        <>
            <tr>
                <td>휴대폰 번호</td>
                <td>{phoneNum}</td>
                <td><button onClick={onHandleModify}>{button}</button></td>
            </tr>
            {visible == true ? showModify : null}
        </>
    );
}

export default ModifyPhoneNum;