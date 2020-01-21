import React, { useState, useEffect } from 'react';

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';
import ModifyBtn from '../lib/Button';

import { getUserInfo, patchUserInfo } from '../services/userInfoService';

function ModifyUserId() {
  const [userId, setUserId] = useState();
  const [inputUserId, setInputUserId] = useState('');
  const [button, setButton] = useState('아이디 변경')
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () =>
      await getUserInfo().then(v => setUserId(v[0].userId))
    )();
  }, [])

  const onHandleModify = () => {
    setVisible(!visible);
    button == '아이디 변경' ? setButton('변경 취소') : setButton('아이디 변경');
  };

  const changeId = () => {
    patchUserInfo({ userId: inputUserId });
    setUserId(inputUserId);
    onHandleModify();
  }

  const handleChange = e => {
    setInputUserId(e.target.value);
  }

  const showModify = (
    <ModifyInfo>
      <div>
        <input type='text' value={inputUserId} onChange={handleChange} />
      </div>
      <div>
        <ModifyBtn type='submit' onClick={changeId}>변경하기</ModifyBtn>
      </div>
    </ModifyInfo>);

  return (
    <>
      <ModifyDivGrid>
        <ModifyCategory >아이디</ModifyCategory>
        <ModifyInfo>
          <span style={{ paddingRight: '20px' }}>{userId}</span>
          <span><ModifyBtn onClick={onHandleModify}>{button}</ModifyBtn></span>
          {visible == true ? showModify : null}
        </ModifyInfo>
      </ModifyDivGrid>
    </>
  );
}

export default ModifyUserId;