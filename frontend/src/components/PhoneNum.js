import React, { useState, useEffect } from 'react';

function PhoneNum({ onHandleChange, userInfo, onHandleValid }) {
    const [notice, setNotice] = useState('');

    useEffect(() => {
        if(userInfo.phoneNum.length === 11) {
            setNotice('OK');
            onHandleValid({ phoneNumValid: true }, 'phoneNum');
        } 

        if(userInfo.phoneNum.length !== 11) {
            setNotice('11자리를 입력해주세요')
            onHandleValid({ phoneNumValid: false }, 'phoneNum');
        }

        if(userInfo.phoneNum.length === 0) {
            setNotice('');
            onHandleValid({ phoneNumValid: false }, 'phoneNum');
        }
    }, [userInfo.phoneNum]);

    function handleChangeEvent(event) {
        onHandleChange({ phoneNum: event.target.value }, 'phoneNum');
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '150px 250px ', paddingTop: '5px' }}>
            <div>휴대폰번호</div>
            <div><input type="number" name="user_phone_num" style={{width: '100%'}} placeholder="-없이 입력" value={userInfo.phoneNum}
                onChange={handleChangeEvent}/>{notice}</div>
        </div>
    );
}

export default PhoneNum;