import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

import { getProducts } from '../service/taskService';

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

function ProductDetail() {
    const { productId } = useParams();
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const [categoryId, setCategoryId] = useState();
    const [price, setPrice] = useState();
    const [detail, setDetail] = useState();
    const [categoryName, setCategoryName] = useState();
    const [thisProduct, setThisProduct] = useState();
    
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

    const fetchMyApi = async () => { // 왜 안되는건지?
        try {
            const saveData = await getProducts();
            setThisProduct({...saveData[productId]});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMyApi();
    }, []);

    const addCartList = () => {

        let isFind = false;

        cartList.cartLists.map(element => {
            if (element.productId == productId) {
                isFind = true;
            }
        })

        if (isFind == false) {
            cartList.createCartList(productId, title, categoryId, categoryName, img, price);
        }
    }

    return (
        <Div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={thisProduct.img} alt="" width="60%" /></div>
            <div>
                {/* <div style={{ fontSize: '30px', top: '0', marginTop: '20px' }}>{title}</div>
                <div style={{ fontSize: '20px', marginTop: '30px' }}>{price} 원</div>
                <div style={{ fontSize: '15px', marginTop: '30px' }}>카테고리 : {categoryName} </div>
                <div style={{ fontSize: '15px', marginTop: '30px' }}>상품설명 : {detail}</div>

                <div style={{ marginTop: '30px' }}>
                    <span style={{ fontSize: '15px', marginTop: '30px', marginRight: '20px' }}>옵션 선택</span>
                    <select width='300px' id='selectPurchaseOpt'>
                        <option value={undefined} key={0}>옵션을 선택하세요</option>
                        <option value={undefined} key={1}>기본 / 가격 : {price}원</option>
                    </select>
                </div>
                <div style={{ display: 'flex', marginTop: '30px' }}>
                    <div>
                        <Link to={`/order/purchaseRequest/${productId}`}>
                            <button style={{ backgroundColor: '#5f0080', color: 'white', padding: '10px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '5px', border: '1px solid purple', marginRight: '20px' }}>구매하기</button>
                        </Link>
                    </div>
                    <div><button style={{ backgroundColor: 'white', color: 'purple', padding: '10px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '5px', border: '1px solid #5f0080' }} onClick={addCartList}>장바구니 담기</button></div>
                </div> */}
            </div>
        </Div>
    );
}

export default ProductDetail;