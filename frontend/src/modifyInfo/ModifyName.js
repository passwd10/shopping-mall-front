import React, { useState, useEffect } from 'react';

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
    }

    const showModify = (
        <tr>
            <td></td>
            <td><input type='text' onChange={v => setName(v.target.value)} /></td>
            <td><button type='submit' onClick={changeName}>변경하기</button></td>
        </tr>);

    return (
        <>
            <tr>
                <td>이름</td>
                <td>{name}</td>
                <td><button onClick={onHandleModify}>{button}</button></td>
            </tr>
            {visible == true ? showModify : null}
        </>
    );
}

export default ModifyName;