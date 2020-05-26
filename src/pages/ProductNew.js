import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ModifyDivGrid, { ModifyCategory, ModifyInfo, BasicForm } from '../lib/Div';
import { OkBtn, CancelBtn } from '../lib/Button';
import { addProduct } from '../services/productService';
import { uploadImg } from '../services/uploadService';

function ProductNew() {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState('0');
  const [fileName, setFileName] = useState('이미지 파일 선택');
  const [img, setImg] = useState();

  const onRegister = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newProduct = {
      title,
      categoryId,
      categoryName,
      detail,
      img,
      price
    }

    addProduct(newProduct);

    const formData = new FormData();
    formData.append('img', img);
    for (var key of formData.entries()) {
      console.log(key);
    }
    uploadImg(formData);
  };

  const onCategoryChange = (event) => {
    setCategoryName(event.target.value ? event.target.value : undefined);
    setCategoryId(event.target.options.selectedIndex);
  };

  const onChangeFile = (event) => {
    if (event.target.files != null && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      console.log('event.target.files[0]', event.target.files[0]);
      setImg(event.target.files[0]);
    }
  };

  return (
    <BasicForm>
      <h2 style={{ fontWeight: 'bold' }}>상품 등록 하기</h2>
      <form name='productRegister' onSubmit={onRegister}>
        <ModifyDivGrid>
          <ModifyCategory> 카테고리 </ModifyCategory>
          <ModifyInfo>
            <select id='productCategory' onChange={onCategoryChange} key={categoryId} value={categoryName}>
              <option value={undefined} key='0'>카테고리를 선택해주세요.</option>
              <option value={'견과류'} key='1'>견과류</option>
              <option value={'음료'} key='2'>음료</option>
              <option value={'스포츠'} key='3'>스포츠</option>
              <option value={'화장품'} key='4'>화장품</option>
            </select>
          </ModifyInfo>
        </ModifyDivGrid>

        <ModifyDivGrid>
          <ModifyCategory> 상품명 </ModifyCategory>
          <ModifyInfo>
            <input type='text' id='productTitle' placeholder='상품명을 작성해주세요.'
              onChange={v => setTitle(v.target.value)} value={title} />
          </ModifyInfo>
        </ModifyDivGrid>

        <ModifyDivGrid>
          <ModifyCategory> 상품 가격 </ModifyCategory>
          <ModifyInfo>
            <input type='number' id='productPrice' min='0' step='1000' placeholder='가격을 입력해주세요.'
              onChange={v => setPrice(v.target.value)} value={price} />
          </ModifyInfo>
        </ModifyDivGrid>

        <ModifyDivGrid>
          <ModifyCategory> 상품 소개 </ModifyCategory>
          <ModifyInfo>
            <textarea placeholder='상품을 소개해주세요.' cols='75' onChange={v => setDetail(v.target.value)} value={detail} />
          </ModifyInfo>
        </ModifyDivGrid>

        <ModifyDivGrid>
          <ModifyCategory> 상품 이미지 등록 </ModifyCategory>
          <ModifyInfo>
            <input className='upload-name' value={fileName} disabled />
            <div><input type='file' accept='image/*' id='ex_filename' className='upload-hidden' onChange={onChangeFile} /></div >
          </ModifyInfo>
        </ModifyDivGrid>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <OkBtn type='submit'>등록</OkBtn>
          <Link to={`/`}>
            <CancelBtn>취소</CancelBtn>
          </Link>
        </div>
      </form>
    </BasicForm>
  )
}

export default ProductNew;