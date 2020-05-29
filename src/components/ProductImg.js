import React, { useEffect } from 'react'

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';

function ProductImg({ productInfo, onHandleChange, onHandleValid }) {
  
  useEffect(() => {
    if(productInfo.img.size > 0) {
      onHandleValid(true);
      return;
    } 
    onHandleValid(false);
  }, [productInfo.img]);

  const onChangeFile = (event) => {
    if (event.target.files.length > 0) {
      onHandleChange(event.target.files[0])
    }
  };

  return (
    <ModifyDivGrid>
      <ModifyCategory> 상품 이미지 등록 </ModifyCategory>
      <ModifyInfo>
        <input type='file'
          accept='image/*'
          onChange={onChangeFile} />
      </ModifyInfo>
    </ModifyDivGrid>
  )
}

export default ProductImg;
