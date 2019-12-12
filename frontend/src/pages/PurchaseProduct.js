import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { BasicForm } from '../lib/Div';
import ModifyBtn from '../lib/Button';
import ShippingInfo from '../components/ShippingInfo';
import OrderInfo from '../components/OrderInfo';

const DivTitle = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
`;

function PurchaseProduct() {

    return (
        <BasicForm style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <DivTitle>
                <div style={{fontSize: '30px'}}>주문서</div>
                <div>주문하실 상품명 및 수량을 정확하게 확인해주세요.</div>
            </DivTitle>
            <div>
                <ShippingInfo />
                <OrderInfo />
            </div>
        </BasicForm>
    )
}

export default PurchaseProduct;