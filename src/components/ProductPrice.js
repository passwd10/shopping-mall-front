import React, { useEffect } from 'react'

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';

function ProductPrice({ onHandleChange, productInfo, onHandleValid }) {

  useEffect(() => {
    if (productInfo.price.length === 0) {
      onHandleValid(false);
      return;
    }

    onHandleValid(true);
  }, [productInfo.price]);

  const handleChangeEvent = (event) => onHandleChange(event.target.value);

  return (
    <ModifyDivGrid>
      <ModifyCategory> 상품 가격(원) </ModifyCategory>
      <ModifyInfo>
        <input type='number'
          min='0'
          step='0'
          placeholder='가격을 입력해주세요.'
          onChange={handleChangeEvent}
          value={productInfo.price}
        />
      </ModifyInfo>
    </ModifyDivGrid>
  )
}

export default ProductPrice;