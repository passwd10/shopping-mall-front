import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 150px 750px;
`;

const DivTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const DivLi = styled.div`
    font-size: 13px;
    padding-top: 2px;
    padding-bottom: 2px;
`;

function MyPage() {
    const [myState, setMyState] = useState(document.cookie.split('=')[1]);

    return (
        <div style={{width: '60%', marginRight: 'auto', marginLeft: 'auto'}}>
            <DivGrid>
                <div style={{backgroundColor: '#f9f9f9', padding: '10px'}}>
                    {myState == null ?
                        <Redirect to='/user/login' /> :
                        <div>
                            <div style={{fontSize:'20px', textAlign: 'center'}}>마이페이지</div>
                            <div style={{paddingBottom: '20px'}}>
                                <DivTitle>My 쇼핑</DivTitle>
                                <DivLi>주문목록/배송조회</DivLi>
                                <DivLi>취소/반품/교환/환불내역</DivLi>
                            </div>
                            <div style={{paddingBottom: '20px'}}>
                                <DivTitle>My 정보</DivTitle>
                                <Link to='/user/modify'><DivLi>개인정보확인/수정</DivLi></Link>
                                <DivLi>배송지 관리</DivLi>
                            </div>
                        </div>
                    }</div>
                <div></div>
            </DivGrid>
        </div>
    )
}

export default MyPage;