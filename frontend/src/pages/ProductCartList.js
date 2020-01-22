import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getUserInfo } from '../services/userInfoService';
import { deleteCart } from '../services/cartService';
import { getProduct } from '../services/productService';

import styled from 'styled-components';

const InCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CartHeader = styled.span`
    display: block;
    margin-top: 20px;
    background-color: #F9F9F9;
    color: #333;
    font-size: 40px;
    padding: 20px;
    text-align: center;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`;

const DivInfo = styled.div`
    display: grid;
    grid-template-columns: 100px 250px 150px 100px 100px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #333;
    text-align: center;
    `;

const DivCart = styled.div`
    display: grid;
    grid-template-columns: 100px 250px 150px 100px 100px;
    grid-template-rows: 125px;
    text-align: center;

`;

const Div = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const DivBtn = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`;

const PurchaseButton = styled.button`
    color: white;
    border-radius: 5px;
    background-color: #EE5555;
    border: 1px solid #EE5555;
    margin-left: 30px;
    font-size: 20px;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
`;

const KeepShopBtn = styled.button`
    color: black;
    border-radius: 5px;
    background-color: white;
    border: 1px solid gray;
    font-size: 20px;
    padding: 10px;
`;

const DeleteBtn = styled.button`
    color: white;
    border-radius: 5px;
    background-color: gray;
    font-size: 15px;
    border-color: gray;
    margin-top: 50px;
`;

const first = (arr) => arr[0];

function ProductCartList() {
    const [cList, setCList] = useState([]); // 장바구니 상태
    const [myCartList, setMyCartList] = useState([]); //서버에서 가져온 장바구니 상태
    const [estPrice, setEstPrice] = useState(0);    //예상 가격 상태
    const [isLogin, setIsLogin] = useState(document.cookie.split('=')[1]); // 로그인중인지?
    const [products, setProducts] = useState([]);

    let productsIdArr = [];

    myCartList.forEach(v => productsIdArr = [...productsIdArr, v.productId])
    
    const fetchProducts = () => {
        return Promise.all(
            productsIdArr.map(getProduct)
        ).then((products) => {
            return products.map(first);
        });
    }
    
    const promise = fetchProducts();
    
    const deleteList = id => {
        deleteCart(id).then(v => setMyCartList(v));
    }

    const onChangeList = (id) => {
        calculatePrice();
    };

    const calculatePrice = () => {
        let resultPrice = 0;
        myCartList.filter(product => product.purchase == true).map(product => resultPrice += Number(product.price));
        setEstPrice(resultPrice);
    }

    useEffect(() => {
        getUserInfo().then(v => setMyCartList(v[0].cartList))
    }, [])

    useEffect(() => {
        promise.then(product => {
            console.log('product', product);
            setProducts(product);
        })
    }, [myCartList])

    useEffect(() => {
        calculatePrice();
    }, [cList]);

    return (
        <>
            {isLogin == null ?
                <Redirect to='/user/login' /> :
                <div style={{ width: '700px', margin: 'auto' }}>
                    <CartHeader>장바구니</CartHeader>
                    <Div>
                        <span>장바구니 수량 : {myCartList.length} 개</span>
                    </Div>
                    <div>
                        <DivInfo>
                            <div></div>
                            <div>상품정보</div>
                            <div>가격</div>
                            <div>수량</div>
                            <div></div>
                        </DivInfo>
                        {products.map(cartList =>
                            <DivCart key={cartList.id}>
                                <InCart>
                                    <input type="checkbox" defaultChecked={cartList.purchase} onChange={() => onChangeList(cartList.id)} />
                                </InCart>
                                <InCart><img src={cartList.img} width="30%"></img>{cartList.title}</InCart>
                                <InCart>{cartList.price}원</InCart>
                                <InCart>1</InCart>
                                <div><DeleteBtn onClick={() => deleteList(cartList.id)}>삭제</DeleteBtn></div>
                            </DivCart>
                        )}
                    </div>
                    <Div>
                        <span>예상 가격 : {estPrice} 원</span>
                    </Div>
                    <DivBtn>
                        <Link to={`/`}>
                            <KeepShopBtn>쇼핑 계속하기</KeepShopBtn>
                        </Link>
                        <Link to={`/order/purchaseRequest/999`}>
                            <PurchaseButton>구매하기</PurchaseButton>
                        </Link>
                    </DivBtn>
                </div>}
        </>
    )
}

export default ProductCartList;
