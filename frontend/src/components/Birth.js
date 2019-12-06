import React, { useState, useEffect } from 'react'

function Birth({ onHandleChange, allState, onHandleValid }) {
    const [notice, setNotice] = useState('');
    
    useEffect(() => {
        if (allState.birth.length === 8) {
            setNotice('OK');
            onHandleValid({ birthValid: true }, 'birth');
        }

        if (allState.birth.length !== 8) {
            setNotice('8자리를 입력해주세요')
            onHandleValid({ birthValid: false }, 'birth');
        }

        if (allState.birth.length === 0) {
            setNotice('');
            onHandleValid({ birthValid: false }, 'birth');
        }

    }, [allState.birth]);

    function handleChangeEvent(event) {
        onHandleChange({ birth: event.target.value }, 'birth');
    }

    return (
        <tr>
            <td>생년월일</td>
            <td><input type="number" name="user_birth" placeholder="8자리 숫자로 입력 (ex. 19901201)" size="30" value={allState.birth}
                onChange={handleChangeEvent} />{notice}</td>
        </tr>
    );
}

export default Birth;