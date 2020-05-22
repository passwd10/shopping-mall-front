import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { Form, Body, Input, NoticeForm } from '../lib/SignUpStyle';

const TitleSpan = styled.span`
  margin-right: 95px;
`

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
    <Form>
      <Body>
        <TitleSpan>이름 *</TitleSpan>
        <Input
          value={userInfo.name}
          onChange={handleChangeEvent}
          type="text"
          name="user_name"
        />
      </Body>
      <NoticeForm>{notice}</NoticeForm>
    </Form>
  );
}

export default UserName;