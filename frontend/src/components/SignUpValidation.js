import React, { useState } from 'react';

function SignUpValidation({ notice, onHandleChangeNotice }) {

    const checkAllInput = event => {
        onHandleChangeNotice(event.tar)
    };

    return (
        <>
            <tr>
                <td></td>
                <td><input type="submit" name="submit" value="회원가입 완료" onClick={event => checkAllInput(event)} />{notice}</td>
            </tr>
        </>
    );
}

export default SignUpValidation;