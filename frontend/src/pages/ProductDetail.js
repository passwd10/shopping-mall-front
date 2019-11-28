import React from "react";
import { useParams, Link } from "react-router-dom";

import productStore from "../stores/productStore";

function ProductDetail() {
    const { productId } = useParams();
    const product = productStore.getProduct(productId);

    return (
        <>
            <h1>{product.title}</h1>
            <h3>가격 : {product.price} 원</h3>
            <img
                src={product.img}
                alt=""
                width="50%"
            />
            <h2>카테고리 : {product.category} </h2>
            <p>상품설명 : {product.detail}</p>
            
            <select width='300px' id='selectPurchaseOpt'>
                <option value={undefined} key={0}>옵션을 선택하세요</option>
                <option value={undefined} key={1}>기본 / 가격 : {product.price}원</option>
            </select>

            {/* <Link to={`/order/purchaseRequest`}> */}
                <button>구매하기</button>
            {/* </Link> */}
            <button>장바구니</button>
        </>
    );
}

export default ProductDetail;