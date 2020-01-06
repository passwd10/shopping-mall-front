import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ModifyDivGrid, { ModifyCategory, ModifyInfo, OrderProductInfo, OrderProductCategory } from '../lib/Div';
import { OkBtn } from '../lib/Button';

import { getProduct } from '../services/productService';
import { getCarts } from '../services/cartService';

function OrderInfo() {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [resultPrice, setResultPrice] = useState(0);

    useEffect(() => {
        if (productId == 999) {   //장바구니에서 불러오기
            getCarts().then(v => setProducts(v.filter(product => product.purchase == true)));
        } else {
            getProduct(productId).then(v => setProducts([v]));
        }
    }, [])

    useEffect(() => {
        let priceSum = 0;
        products.map(product => priceSum += Number(product.price));
        setResultPrice(priceSum);
    }, [products])

    return (
        <div>
            <div style={{ paddingTop: '30px' }}>주문상품 정보</div>
            <OrderProductCategory>
                <div>상품정보</div>
                <div>수량</div>
                <div>상품금액</div>
                <div>배송비</div>
            </OrderProductCategory>

            <div>
                {products.map(product =>
                    <OrderProductInfo key={product.id}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ paddingRight: '10px' }}><img src={product.img} width="70" height="70" alt="이미지를 불러올 수 없습니다" /></div>
                            <div>{product.title}</div>
                        </div>
                        <div>
                            <div>1개</div>
                        </div>

                        <div><span>{product.price}</span><span>원</span></div>
                        <div>무료</div>
                    </OrderProductInfo>
                )}

            </div>

            <div>
                <div style={{ paddingTop: '30px' }}><span>최종 결제 가격 : </span><span>{resultPrice}원 </span></div>
                <div style={{ textAlign: 'center', padding: '20px' }}><OkBtn>결제하기</OkBtn></div>
            </div>
        </div>
    );
}

export default OrderInfo;