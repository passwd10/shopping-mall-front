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
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const MyPageDiv = styled.div`
	display: flex;
	position: fixed;
	top: 45%;
	left: 10%;
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
				<Link to="/product/new">
					<DivLi>
						상품 등록
						</DivLi>
				</Link>
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
			</div>
		</MyPageDiv>
	)
}

export default MyPage;