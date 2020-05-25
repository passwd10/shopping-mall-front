import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ModalDiv = styled.div`
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 500px;
  height: 340px;
  border-radius: 5px;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
`

const ModalTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

const ModalText = styled.text`
  text-align: center;
  font-size: 22px;
`

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

const CloseBtn = styled.button`
  width: 400px;
  height: 35px;
  margin-top: 5px;
  font-size: 20px;
  color: white;
  background-color: #6495ED;
  border: 1px #B0C4DE solid;
  border-radius: 5px;
`
const StrongText = styled.strong`
  color: #B22222;
  font-size: 30px;
`

function Modal(props) {
  return (
    <ModalDiv>
      <ModalContent>
        <ModalTitle>환영합니다!</ModalTitle>
        <ModalText>'{props.name}'님, 회원가입을 축하합니다!
        </ModalText>
        <ModalText>
          쇼핑몰에 가입하신 ID는 <StrongText>{props.userId}</StrongText>입니다.
        </ModalText>
        <BtnDiv>
          <Link to='/'>
            <CloseBtn>메인으로 가기</CloseBtn>
          </Link>
          <Link to='/user/login'>
            <CloseBtn>로그인하기</CloseBtn>
          </Link>
        </BtnDiv>
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal;