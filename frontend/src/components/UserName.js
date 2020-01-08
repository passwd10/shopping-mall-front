import React, { useState, useEffect } from 'react'

function UserName({ onHandleChange, userInfo, onHandleValid }) {
    const [notice, setNotice] = useState('');

    useEffect(() => {
        if (userInfo.name.length < 2) {
            setNotice('2자 이상 입력하세요')
            onHandleValid(false);
            return;
        }

        if (userInfo.name.length === 0) {
            setNotice('');
            onHandleValid(false);
            return;
        }

        setNotice('OK');
        onHandleValid(true);
    }, [userInfo.name]);

    const handleChangeEvent = (event) => onHandleChange(event.target.value);

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 250px ', paddingTop: '5px' }}>
                <div>이름</div>
                <div><input type="text" name="user_name" style={{ width: '100%' }} value={userInfo.name} onChange={handleChangeEvent} />{notice}</div>
            </div>
        </>
    );
}

export default UserName;