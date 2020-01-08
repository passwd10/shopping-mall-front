import React from 'react';
import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';

function ShippingInfo() {

  return (
    <div>
      <div>배송 정보</div>
      <div>
        <ModifyDivGrid>
          <ModifyCategory>주문자</ModifyCategory>
          <ModifyInfo>박인서</ModifyInfo>
        </ModifyDivGrid>
        <ModifyDivGrid>
          <ModifyCategory>이름</ModifyCategory>
          <ModifyInfo><input type="text" /></ModifyInfo>
        </ModifyDivGrid>
        <ModifyDivGrid>
          <ModifyCategory>연락처</ModifyCategory>
          <ModifyInfo>010-1234-5678</ModifyInfo>
        </ModifyDivGrid>
        <ModifyDivGrid>
          <ModifyCategory>주소</ModifyCategory>
          <ModifyInfo>이태원</ModifyInfo>
        </ModifyDivGrid>
        <ModifyDivGrid>
          <ModifyCategory>배송시 요청사항</ModifyCategory>
          <ModifyInfo>
            <select id='productCategory'>
              <option value={undefined} key={0}>배송시 요청사항 선택</option>
              <option value={undefined} key={1}>부재시 경비실에 맡겨주세요</option>
              <option value={undefined} key={2}>부재시 집앞에 놓아주세요</option>
              <option value={undefined} key={3}>집 앞에 놓아주세요</option>
            </select>
          </ModifyInfo>
        </ModifyDivGrid>
      </div>
    </div>
  );
}

export default ShippingInfo;
