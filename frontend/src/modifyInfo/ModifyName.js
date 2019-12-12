import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModifyDivGrid, {ModifyCategory, ModifyInfo} from '../lib/Div';
import ModifyBtn from '../lib/Button';

function ModifyName() {
    const [name, setName] = useState(localStorage.getItem('name'));
    const [button, setButton] = useState('이름 변경')
    const [visible, setVisible] = useState(false);

    const onHandleModify = () => {
        setVisible(!visible);
        button == '이름 변경' ? setButton('변경 취소') : setButton('이름 변경');
    };

    const changeName = () => {
        localStorage['name'] = name;
        onHandleModify();
    }

    const showModify = (
        <ModifyInfo>
            <div></div>
            <div><input type='text' onChange={v => setName(v.target.value)} /></div>
            <div><ModifyBtn type='submit' onClick={changeName}>변경하기</ModifyBtn></div>
        </ModifyInfo>);

    return (
        <div>
            <ModifyDivGrid>
                <ModifyCategory>이름</ModifyCategory>
                <ModifyInfo>
                    <span style={{paddingRight: '20px'}}>{localStorage['name']}</span>
                    <span><ModifyBtn onClick={onHandleModify}>{button}</ModifyBtn></span>
                    {visible == true ? showModify : null}
                </ModifyInfo>
            </ModifyDivGrid>
        </div>
    );
}

export default ModifyName;