import React, { useEffect } from 'react'

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';

function ProductName({ onHandleChange, productInfo, onHandleValid }) {

  useEffect(() => {
    if(productInfo.title.length > 0) {
      onHandleValid(true);  
    }
  }, [productInfo.title]);


  const handleChangeEvent = (event) => onHandleChange(event.target.value);
 
  return (
    <ModifyDivGrid>
      <ModifyCategory> 상품명 </ModifyCategory>
      <ModifyInfo>
        <input type='text'
          placeholder='상품명을 작성해주세요.'
          onChange={handleChangeEvent}
          value={productInfo.title}
        />
      </ModifyInfo>
    </ModifyDivGrid>
  );
}

export default ProductName;