import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ModifyDivGrid, { ModifyCategory, ModifyInfo, OrderProductInfo, OrderProductCategory } from '../lib/Div';
import { OkBtn } from '../lib/Button';

import productStore, { cartList } from "../stores/productStore";

function OrderInfo() {

    const { productId } = useParams();
    let products = [];

    if (productId == 999) {   //장바구니에서 불러오기
        products = cartList.cartLists.filter(product => product.purchase == true);
    } else {
        products = [productStore.getProduct(productId)];
    }

    let resultPrice = 0;
    products.map(product => resultPrice += Number(product.price));
    console.log('결제금액', resultPrice);


    return (
        <div>
            <div style={{paddingTop: '30px'}}>주문상품 정보</div>
            <OrderProductCategory>
                <div>상품정보</div>
                <div>수량</div>
                <div>상품금액</div>
                <div>배송비</div>
            </OrderProductCategory>

            <div>
                {products.map(products =>
                    <OrderProductInfo key={products.id}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{paddingRight: '10px'}}><img src={products.img} width="70" height="70" alt="이미지를 불러올 수 없습니다" /></div>
                            <div>{products.title}</div>
                        </div>
                        <div>
                            <div>1개</div>
                        </div>

                        <div><span>{products.price}</span><span>원</span></div>
                        <div>무료</div>
                    </OrderProductInfo>
                )}

            </div>

            <div>
                <div style={{paddingTop: '30px'}}><span>최종 결제 가격 : </span><span>{resultPrice}원 </span></div>
                <div style={{textAlign: 'center', padding: '20px'}}><OkBtn>결제하기</OkBtn></div>
            </div>
        </div>
    );
}

export default OrderInfo;