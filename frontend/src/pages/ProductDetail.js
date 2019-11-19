import React from "react";
import { useParams } from "react-router-dom";

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
        </>
    );
}

export default ProductDetail;