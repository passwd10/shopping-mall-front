import React, { useState, useEffect } from 'react';

function PhoneNum({ onHandleChange, userInfo, onHandleValid }) {
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (userInfo.phoneNum.length === 0) {
      setNotice('');
      onHandleValid(false);
      return;
    }

    if (userInfo.phoneNum.length !== 11) {
      setNotice('11자리를 입력해주세요');
      onHandleValid(false);
      return;
    }

    if (userInfo.phoneNum.length === 11) {
      setNotice('OK');
      onHandleValid(true);
    }
  }, [userInfo.phoneNum]);

  const handleChangeEvent = (event) => onHandleChange(event.target.value);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 250px ', paddingTop: '5px' }}>
      <div>휴대폰번호</div>
      <div>
        <input
          style={{ width: '100%' }}
          value={userInfo.phoneNum}
          onChange={handleChangeEvent}
          type="number"
          name="user_phone_num"
          placeholder="-없이 입력"
        />
        {notice}
      </div>
    </div>
  );
}

export default PhoneNum;
