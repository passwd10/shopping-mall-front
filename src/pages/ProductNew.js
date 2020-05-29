import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BasicForm } from '../lib/Div';
import { OkBtn, CancelBtn } from '../lib/Button';
import { uploadFile } from '../services/uploadService';

import ProductName from '../components/ProductName';
import ProductPrice from '../components/ProductPrice';
import ProductDetail from '../components/ProductDetail';
import ProductImage from '../components/ProductImg';
import ProductCategory from '../components/ProductCategory';

function ProductNew() {
  const [isValid, setIsValid] = useState(false);
  const [productInfo, setProductInfo] = useState({
    title: '',
    detail: '',
    price: '',
    categoryName: '',
    categoryId: '0',
    img: '',
  });

  const [validCondition, setValidCondition] = useState({
    validTitle: false,
    validDetail: false,
    validPrice: false,
    validCategory: false,
    validImg: false,
  })

  const onRegister = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData();
    formData.append('img', productInfo.img);
    formData.append('productInfo', JSON.stringify(productInfo));
    
    let message = '';
    try {
      await uploadFile(formData);
      message = '상품 등록에 성공했습니다.'
    } catch (err) {
      message = '상품 등록에 실패했습니다.'
    }
    alert(message);
    window.location = '/';
  };

  const onHandleChange = (property) => (value) => {
    property = property.split(',');
    if (property.length === 1) {
      setProductInfo({ ...productInfo, [property]: value })
    } else {
      value = value.split(',');
      setProductInfo({ ...productInfo, [property[0]]: value[0], [property[1]]: value[1] })
    }
  }

  const onHandleValid = (property) =>
    (valid) => setValidCondition({ ...validCondition, [property]: valid });

  useEffect(() => {
    Object.entries(validCondition)
      .map(v => v[1])
      .every(v2 => v2 === true) && setIsValid(true);
  }, [validCondition])

  return (
    <BasicForm>
      <h2 style={{ fontWeight: 'bold', marginTop: '20px'}}>상품 등록 하기</h2>
      <p>(모든 항목을 기재하셔야 등록할 수 있습니다.)</p>
      <form name='productRegister' onSubmit={onRegister}>
        <ProductCategory
          productInfo={productInfo}
          onHandleChange={onHandleChange('categoryName,categoryId')}
          onHandleValid={onHandleValid('validCategory')}
        />
        <ProductName
          productInfo={productInfo}
          onHandleChange={onHandleChange('title')}
          onHandleValid={onHandleValid('validTitle')}
        />
        <ProductPrice
          productInfo={productInfo}
          onHandleChange={onHandleChange('price')}
          onHandleValid={onHandleValid('validPrice')}
        />
        <ProductDetail
          productInfo={productInfo}
          onHandleChange={onHandleChange('detail')}
          onHandleValid={onHandleValid('validDetail')}
        />
        <ProductImage
          productInfo={productInfo}
          onHandleChange={onHandleChange('img')}
          onHandleValid={onHandleValid('validImg')}
        />

        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <OkBtn type='submit' disabled={!isValid}>등록</OkBtn>
          <Link to={`/`}>
            <CancelBtn>취소</CancelBtn>
          </Link>
        </div>
      </form>
    </BasicForm>
  )
}

export default ProductNew;