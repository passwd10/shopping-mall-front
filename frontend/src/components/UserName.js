import React, { useState, useEffect } from 'react'

function UserName({ onHandleChange, allState, onHandleValid }) {
    const [notice, setNotice] = useState('');

    useEffect(() => {
        if (allState.name.length < 2) {
            setNotice('2자 이상 입력하세요')
            onHandleValid({ nameValid: false }, 'name');
        }

        if (allState.name.length >= 2) {
            setNotice('OK');
            onHandleValid({ nameValid: true }, 'name');
        }

        if (allState.name.length === 0) {
            setNotice('');
            onHandleValid({ nameValid: false }, 'name');
        }

    }, [allState.name]);

    function handleChangeEvent(event) {
        onHandleChange({ name: event.target.value }, 'name');
    }

    return (
        <>
            <tr>
                <td>이름</td>
                <td><input type="text" name="user_name" size="30" value={allState.name} onChange={handleChangeEvent} />{notice}</td>
            </tr>
        </>
    );
}

export default UserName;