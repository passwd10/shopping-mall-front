import React from "react";
import styled from 'styled-components';

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height:340px;
`
const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
`

function NotFound() {
  return (
    <NotFoundDiv>
      <Title>
        요청하신 페이지를 찾을 수 없습니다.
      </Title>
    </NotFoundDiv>
  )
}

export default NotFound;