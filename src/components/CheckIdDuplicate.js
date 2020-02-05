import React, { useState } from 'react';

import { checkIdDuplicate } from '../services/signUpService';

function CheckIdDuplicate({ onHandleChange, userInfo, onHandleValid }) {
  const [notice, setNotice] = useState('중복검사 버튼을 눌러주세요.');

  const checkDuplicate = async () => {
    try {
      const isDuplicate = await checkIdDuplicate(userInfo.userId);
      const message = isDuplicate === 1
        ? '중복된 아이디 입니다.'
        : '사용 가능한 아이디 입니다.';
      setNotice(message);
      onHandleValid(!isDuplicate);
    } catch (err) {
      alert('에러가 발생했습니다. ', err);
    }
  };

  const handleChangeEvent = (event) => onHandleChange(event.target.value);

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '150px 160px 100px' }}>
        <div>아이디</div>
        <div>
          <input
            style={{ width: '100%' }}
            onChange={handleChangeEvent}
            value={userInfo.userId}
            type="text"
          />
        </div>
        <div>
          <button onClick={checkDuplicate} type="button">
            중복검사
          </button>
        </div>
      </div>
      <div>{notice}</div>
    </>
  );
}

export default CheckIdDuplicate;
