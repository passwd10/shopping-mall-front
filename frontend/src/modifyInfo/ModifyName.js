import React, { useState } from 'react';

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';
import ModifyBtn from '../lib/Button';

import { getUserInfo, patchUserInfo } from '../services/userInfoService';

function ModifyName() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');
  const [button, setButton] = useState('이름 변경');
  const [visible, setVisible] = useState(false);

  (async () => 
    await getUserInfo().then((v) => setName(v[0].name))
  )();

  const onHandleModify = () => {
    setVisible(!visible);
    button == '이름 변경' ? setButton('변경 취소') : setButton('이름 변경');
  };

  const changeName = () => {
    patchUserInfo('name', inputName);
    setName(inputName);
    onHandleModify();
  };

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const showModify = (
    <ModifyInfo>
      <div>
        <input type="text" value={inputName} onChange={handleChange} />
      </div>
      <div>
        <ModifyBtn type="submit" onClick={changeName}>변경하기</ModifyBtn>
      </div>
    </ModifyInfo>
  );

  return (
    <div>
      <ModifyDivGrid>
        <ModifyCategory>이름</ModifyCategory>
        <ModifyInfo>
          <span style={{ paddingRight: '20px' }}>{name}</span>
          <span><ModifyBtn onClick={onHandleModify}>{button}</ModifyBtn></span>
          {visible === true ? showModify : null}
        </ModifyInfo>
      </ModifyDivGrid>
    </div>
  );
}

export default ModifyName;
