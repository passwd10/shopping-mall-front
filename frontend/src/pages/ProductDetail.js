import React, { useState, useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

import { getProducts } from '../service/taskService';
import { addCartList } from '../service/cartService';

const Div = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    /* justify-content: center; */
    /* align-items: center; */
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
`;


const initialProduct = {
    title: '',
    img: '',
    categoryId: 0,
    categoryName: '',
    price: 0,
    detail: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'addProduct': {
            return {
                ...state,
                title: action.title,
                img: action.img,
                categoryId: action.categoryId,
                categoryName: action.categoryName,
                price: action.price,
                detail: action.detail,
            };
        }
    }
}

function ProductDetail() {
    const { productId } = useParams();
    const [productState, dispatch] = useReducer(reducer, initialProduct);

    // const [title, setTitle] = useState();
    // const [img, setImg] = useState();
    // const [categoryId, setCategoryId] = useState();
    // const [price, setPrice] = useState();
    // const [detail, setDetail] = useState();
    // const [categoryName, setCategoryName] = useState();
    // async function fetchMyApi() {
    //     try {
    //         const saveData = await getProducts();
    //         const productIndex = productId - 1;
    //         setTitle(saveData[productIndex].title);
    //         setImg(saveData[productIndex].img);
    //         setCategoryId(saveData[productIndex].categoryId);
    //         setCategoryName(saveData[productIndex].categoryName);
    //         setPrice(saveData[productIndex].price);
    //         setDetail(saveData[productIndex].detail);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const fetchMyApi = async () => {
        try {
            const saveData = await getProducts();
            dispatch({
                type: 'addProduct',
                title: saveData[productId - 1].title,
                img: saveData[productId - 1].img,
                categoryId: saveData[productId - 1].categoryId,
                categoryName: saveData[productId - 1].categoryName,
                price: saveData[productId - 1].price,
                detail: saveData[productId - 1].detail
            });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchMyApi();
    }, []);

    const addCart = () => { 
        addCartList(localStorage.getItem('userId'), localStorage.getItem('categoryId'), productId);
        console.log('사용자정보', localStorage);
    }

    return (
        <Div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={productState.img} alt="" width="60%" /></div>
            <div>
                <div style={{ fontSize: '30px', top: '0', marginTop: '20px' }}>{productState.title}</div>
                <div style={{ fontSize: '20px', marginTop: '30px' }}>{productState.price} 원</div>
                <div style={{ fontSize: '15px', marginTop: '30px' }}>카테고리 : {productState.categoryName} </div>
                <div style={{ fontSize: '15px', marginTop: '30px' }}>상품설명 : {productState.detail}</div>

                <div style={{ marginTop: '30px' }}>
                    <span style={{ fontSize: '15px', marginTop: '30px', marginRight: '20px' }}>옵션 선택</span>
                    <select width='300px' id='selectPurchaseOpt'>
                        <option value={undefined} key={0}>옵션을 선택하세요</option>
                        <option value={undefined} key={1}>기본 / 가격 : {productState.price}원</option>
                    </select>
                </div>
                <div style={{ display: 'flex', marginTop: '30px' }}>
                    <div>
                        <Link to={`/order/purchaseRequest/${productId}`}>
                            <button style={{ backgroundColor: '#5f0080', color: 'white', padding: '10px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '5px', border: '1px solid purple', marginRight: '20px' }}>구매하기</button>
                        </Link>
                    </div>
                    <div><button style={{ backgroundColor: 'white', color: 'purple', padding: '10px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '5px', border: '1px solid #5f0080' }} onClick={addCart}>장바구니 담기</button></div>
                </div>
            </div>
        </Div>
    );
}

export default ProductDetail;