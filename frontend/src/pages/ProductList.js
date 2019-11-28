import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

import productStore, { productsCategory } from '../stores/productStore';
import sortProducts from '../service/sortProducts';

const store = {
    items: [],
};

function ProductList() {
    const { groupId } = useParams();
    const categoryName = productsCategory[groupId];
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState(productStore.products.filter(product =>
        product.categoryName == categoryName));

    const sortProducts = v => {

        let sortItems;
        if (v == 'oreum') {
            products.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (v == 'naerim') {
            sortItems = products.sort((a, b) => {
                return b.price - a.price;
            });
        }
        return sortItems;
    };

    // useEffect(() => {

    // }, [sort]);

    // useEffect(() => {

    // }, [products]);

    return (
        <>
            <button onClick={() => { setSort('oreum') }} onChange={sortProducts(sort)}>낮은가격순</button>
            <button onClick={() => { setSort('naerim') }} onChange={sortProducts(sort)}>높은가격순</button>

            <h3>상세페이지를 보려면 이미지를 클릭 해주세요</h3>

            <div>
                {products.map(item =>
                    <div key={item.id}>
                        <Link to={`/product/${item.id}`} id={`${item.id}`}>
                            <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" width="30%" />
                        </Link>
                        <h2> {item.title} </h2>
                        <h3> {item.price} 원 </h3>
                    </div>
                )
                }
            </div>

            {store.items = []}
        </>
    );
};

export default ProductList;