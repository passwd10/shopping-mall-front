import React, { useEffect } from 'react'

import ModifyDivGrid, { ModifyCategory, ModifyInfo } from '../lib/Div';

function productCategory({ onHandleChange, productInfo, onHandleValid }) {
  useEffect(() => {
    if (productInfo.categoryId == '0') {
      onHandleValid(false);
      return;
    }
    onHandleValid(true);
  }, [productInfo.categoryId])

  const onCategoryChange = (event) => {
    onHandleChange(event.target.value + ',' + event.target.options.selectedIndex);
  };

  return (
    <ModifyDivGrid>
      <ModifyCategory> 카테고리 </ModifyCategory>
      <ModifyInfo>
        <select
          onChange={onCategoryChange}
          key={productInfo.categoryId}
          value={productInfo.categoryName}>
          <option value={undefined} key='0'>카테고리를 선택해주세요.</option>
          <option value={'견과류'} key='1'>견과류</option>
          <option value={'음료'} key='2'>음료</option>
          <option value={'스포츠'} key='3'>스포츠</option>
          <option value={'화장품'} key='4'>화장품</option>
        </select>
      </ModifyInfo>
    </ModifyDivGrid>
  )
}

export default productCategory;
