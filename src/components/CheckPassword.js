import React, { useState, useEffect } from 'react';

import { Form, Body, Input, NoticeForm } from '../lib/SignUpStyle';

import styled from 'styled-components';

const TitleSpan = styled.span`
  margin-right: 67px;
`
const ReTitleSpan = styled.span`
  margin-right: 33px;
`

function CheckPassword({ onHandleChange, userInfo, onHandleValid }) {
  const [inspectPasswd, setInspectPasswd] = useState('');
  const [pwdNotice, setPwdNotice] = useState('');
  const [inspNotice, setInspNotice] = useState('');

  useEffect(() => {
    if (userInfo.password.length === 0 && inspectPasswd.length === 0) {
      setInspNotice('');
      onHandleValid(false);
      return;
    }

    if (userInfo.password !== inspectPasswd) {
      setInspNotice('비밀번호가 일치하지 않습니다.');
      onHandleValid(false);
      return;
    }

    if (userInfo.password === inspectPasswd && userInfo.password.length > 5) {
      setInspNotice('비밀번호가 일치합니다.');
      onHandleValid(true);
    }
  }, [inspectPasswd]);

  useEffect(() => {
    if (userInfo.password.length > 5) {
      setPwdNotice('OK');
      onHandleValid(false);
      return;
    }

    if (userInfo.password.length < 5) {
      setPwdNotice('6자리 이상 입력해주세요.');
      onHandleValid(false);
      return;
    }

    if (userInfo.password.length === 0 && inspectPasswd.length === 0) {
      setInspNotice('');
      setPwdNotice('');
      onHandleValid(false);
      return;
    }

    if (userInfo.password !== inspectPasswd) {
      setInspNotice('비밀번호가 일치하지 않습니다.');
      onHandleValid(false);
      return;
    }

    if (userInfo.password === inspectPasswd && userInfo.password.length > 5) {
      setInspNotice('비밀번호가 일치합니다.');
      onHandleValid(true);
    }
  }, [userInfo.password]);

  const handleChangeEvent = (event) => onHandleChange(event.target.value);

  return (
    <>
      <Form>
        <Body>
          <TitleSpan>비밀번호 *</TitleSpan>
          <Input
            value={userInfo.password}
            onChange={handleChangeEvent}
            type="password"
            name="user_pw"
            placeholder="영문/숫자/특수문자 조합 6~15자"
            size="30"
          />
        </Body>
        <NoticeForm>{pwdNotice}</NoticeForm>
      </Form>
      <Form>
        <Body>
          <ReTitleSpan>비밀번호 확인 *</ReTitleSpan>
          <Input
            value={inspectPasswd}
            onChange={(v) => setInspectPasswd(v.target.value)}
            type="password"
            name="user_pw2"
            size="30"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </Body>
        <NoticeForm>{inspNotice}</NoticeForm>
      </Form>
    </>
  );
}

export default CheckPassword;
