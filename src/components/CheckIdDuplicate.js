import React, { useState } from 'react';

import { checkIdDuplicate } from '../services/signUpService';
import { Form, Body, TitleSpan, Input, CheckBtn, NoticeForm } from '../lib/SignUpStyle';

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
    <Form>
      <Body>
        <TitleSpan>아이디 *</TitleSpan>
        <Input
          onChange={handleChangeEvent}
          value={userInfo.userId}
          type="text"
        />
        <CheckBtn onClick={checkDuplicate} type="button">
          중복검사
      </CheckBtn>
      </Body>
      <NoticeForm>{notice}</NoticeForm>
    </Form>
  );
}

export default CheckIdDuplicate;
