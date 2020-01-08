import React, { useState, useEffect } from 'react';

function Birth({ onHandleChange, userInfo, onHandleValid }) {
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (userInfo.birth.length !== 8) {
      setNotice('8자리를 입력해주세요');
      onHandleValid(false);
      return;
    }

    if (userInfo.birth.length === 0) {
      setNotice('');
      onHandleValid(false);
      return;
    }

    if (userInfo.birth.length === 8) {
      setNotice('OK');
      onHandleValid(true);
    }
  }, [userInfo.birth]);

  const handleChangeEvent = (event) => onHandleChange(event.target.value);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 250px ', paddingTop: '5px' }}>
      <div>생년월일</div>
      <div>
        <input
          type="number"
          name="user_birth"
          placeholder="8자리 숫자로 입력 (ex. 19901201)"
          style={{ width: '100%' }}
          value={userInfo.birth}
          onChange={handleChangeEvent}
        />
        {notice}
      </div>
    </div>
  );
}

export default Birth;
