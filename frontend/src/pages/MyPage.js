import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function MyPage() {
    const [myState, setMyState] = useState(localStorage.getItem('userId'));

    return (
        <>
            {myState == null ?
                <Redirect to='/user/login' /> :
                <div>
                    <h4>마이페이지</h4>
                    <ul>
                        <h4>My 쇼핑</h4>
                        <li>주문목록/배송조회</li>
                        <li>취소/반품/교환/환불내역</li>
                    </ul>
                    <ul>
                        <h4>My 정보</h4>
                        <Link to='/user/modify'><li>개인정보확인/수정</li></Link>
                        <li>배송지 관리</li>
                    </ul>
                </div>
            }

        </>
    )
}

export default MyPage;