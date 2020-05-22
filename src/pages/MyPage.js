import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const MyPageDiv = styled.div`
	display: flex;
	position: fixed;
	top: 40%;
	margin-left: 50px;
	flex-direction: column;
  background-color: #F0FFFF;
  padding: 10px;
`

function MyPage() {
	return (
		<MyPageDiv>
			<div style={{ fontSize: '20px', textAlign: 'center' }}>
				마이페이지
          </div>
			<div style={{ paddingBottom: '20px' }}>
				<DivTitle>
					My 쇼핑
						</DivTitle>
				<DivLi>
					주문목록/배송조회
						</DivLi>
				<DivLi>
					취소/반품/교환/환불내역
						</DivLi>
			</div>
			<div style={{ paddingBottom: '20px' }}>
				<DivTitle>
					My 정보
							</DivTitle>
				<Link to='/user/modify'>
					<DivLi>
						개인정보확인/수정
							</DivLi>
				</Link>
				<DivLi>
					배송지 관리
						</DivLi>
			</div>
		</MyPageDiv>
	)
}

export default MyPage;