import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 48px;
  background-color: #F5FFFA;
  margin-top: 100px;
`

const CustomerService = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 30%;
`

const AboutMall = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 20%;
`

const Title = styled.span`
  font-size: 20px;
  padding: 5px 0px;
`

const Content = styled.span`
  font-size: 15px;
`

function Footer() {

  return (
    <FooterDiv>
      <CustomerService>
        <Title>고객센터 C/S Center</Title>
        <Content>전화 : 02-0000-0000  </Content>
        <Content>팩스 : 02-XXXX-0000</Content>
        <Content>이메일 : inseo9494@gmail.com</Content>
      </CustomerService>
      <AboutMall>
        <Title>박앤서 쇼핑몰</Title>
        <Content>근무시간 : 평일 AM 9:00 ~ PM 7:00</Content>
        <Content>점심시간 : PM 12 :00 ~ PM 1 : 00</Content>
        <Content>고객센터 : AM 10: 00 ~ PM 6 : 00</Content>
      </AboutMall>
    </FooterDiv>
  );
}

export default Footer;