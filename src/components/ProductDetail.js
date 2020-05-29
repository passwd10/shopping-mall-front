import React, { useState, useEffect } from 'react'

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';

function ProductDetail({ onHandleChange, productInfo, onHandleValid }) {

  useEffect(() => {
    if (productInfo.detail.length === 0) {
      onHandleValid(false);
      return;
    }
    onHandleValid(true);
  }, [productInfo.detail])

  const handleChangeEvent = (event) => onHandleChange(event.target.value);

  return (
    <ModifyDivGrid>
      <ModifyCategory> 상품 소개 </ModifyCategory>
      <ModifyInfo>
        <textarea 
          placeholder='상품을 소개해주세요.' 
          cols='30'
          onChange={handleChangeEvent}
          value={productInfo.detail}
        />
      </ModifyInfo>
    </ModifyDivGrid>
  )
}

export default ProductDetail;