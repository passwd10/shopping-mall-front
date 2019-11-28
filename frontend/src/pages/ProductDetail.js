import React from "react";
import { useParams, Link } from "react-router-dom";

import productStore, { cartList } from "../stores/productStore";

function ProductDetail() {
    const { productId } = useParams();
    const { title, price, categoryId, categoryName, img, detail } = productStore.getProduct(productId);

    const addCartList = () => {
        cartList.createCartList(title, categoryId, categoryName);
    }

    return (
        <>
            <h1>{title}</h1>
            <h3>가격 : {price} 원</h3>
            <img
                src={img}
                alt=""
                width="50%"
            />
            <h2>카테고리 : {categoryName} </h2>
            <p>상품설명 : {detail}</p>

            <select width='300px' id='selectPurchaseOpt'>
                <option value={undefined} key={0}>옵션을 선택하세요</option>
                <option value={undefined} key={1}>기본 / 가격 : {price}원</option>
            </select>

            <Link to={`/order/purchaseRequest/${productId}`}>
                <button>구매하기</button>
            </Link>
            <button onClick={addCartList}>장바구니</button>
        </>
    );
}

export default ProductDetail;