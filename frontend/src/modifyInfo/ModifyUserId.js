import React, { useState, useEffect } from 'react';

function ModifyUserId() {
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [button, setButton] = useState('아이디 변경')
    const [visible, setVisible] = useState(false);

    const onHandleModify = () => {
        setVisible(!visible);
        button == '아이디 변경' ? setButton('변경 취소') : setButton('아이디 변경');
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
                <td>아이디</td>
                <td>{userId}</td>
                <td><button onClick={onHandleModify}>{button}</button></td>
            </tr>
            {visible == true ? showModify : null}
        </>
    );
}

export default ModifyUserId;