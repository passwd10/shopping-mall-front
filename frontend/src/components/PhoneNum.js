import React, { useState, useEffect } from 'react';

function PhoneNum({ onHandleChange, allState, onHandleValid }) {
    const [notice, setNotice] = useState('');

    useEffect(() => {
        if(allState.phoneNum.length === 11) {
            setNotice('OK');
            onHandleValid({ phoneNumValid: true }, 'phoneNum');
        } 

        if(allState.phoneNum.length !== 11) {
            setNotice('11자리를 입력해주세요')
            onHandleValid({ phoneNumValid: false }, 'phoneNum');
        }

        if(allState.phoneNum.length === 0) {
            setNotice('');
            onHandleValid({ phoneNumValid: false }, 'phoneNum');
        }
    }, [allState.phoneNum]);

    function handleChangeEvent(event) {
        onHandleChange({ phoneNum: event.target.value }, 'phoneNum');
    }

    return (
        <tr>
            <td>휴대폰번호</td>
            <td><input type="number" name="user_phone_num" size="30" placeholder="-없이 입력" value={allState.phoneNum}
                onChange={handleChangeEvent}/>{notice}</td>
        </tr>
    );
}

export default PhoneNum;