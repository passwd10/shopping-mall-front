import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import { Form, Body, Input, NoticeForm } from '../lib/SignUpStyle';

const TitleSpan = styled.span`
  margin-right: 80px;
`

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
    <Form>
      <Body>
      <TitleSpan>휴대폰 *</TitleSpan>
        <Input
          value={userInfo.phoneNum}
          onChange={handleChangeEvent}
          type="number"
          name="user_phone_num"
          placeholder="-없이 입력"
        />
      </Body>
      <NoticeForm>{notice}</NoticeForm>
    </Form>
  );
}

export default PhoneNum;
