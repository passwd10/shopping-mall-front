import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { Form, Body, Input, NoticeForm } from '../lib/SignUpStyle';

const TitleSpan = styled.span`
  margin-right: 67px;
`

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
    <Form>
      <Body>
      <TitleSpan>생년월일 *</TitleSpan>
        <Input
          type="number"
          name="user_birth"
          placeholder="8자리 숫자로 입력 (ex. 19901201)"
          value={userInfo.birth}
          onChange={handleChangeEvent}
        />
      </Body>
      <NoticeForm>{notice}</NoticeForm>
    </Form>
  );
}

export default Birth;
