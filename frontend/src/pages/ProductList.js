import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

import productStore, { productsCategory } from '../stores/productStore';
import sortProducts from '../service/sortProducts';
import ProductItem from '../components/ProductItem';

import styled from 'styled-components';

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 330px 330px 330px;
    grid-template-rows: 400px;
    width: 1000px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const DivItem = styled.div`
    display: grid;
    grid-template-rows: '330px 100px 100px';
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    color: black;
    border-radius: 5px;
    background-color: white;
    border: 1px solid gray;
    font-size: 15px;
    padding: 5px;
    margin: 5px;
`;

const store = {
    items: [],
};

let newGroupId = 0;

function ProductList() {
    const { groupId } = useParams();
    const categoryName = productsCategory[groupId];
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState([]);

    if (groupId != newGroupId) {
        newGroupId = groupId;
        console.log('바뀐 후 newGroupId', newGroupId);
        setProducts(productStore.products.filter(product => product.categoryName === categoryName));
    }

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

    useEffect(() => {
        setProducts(productStore.products.filter(product => product.categoryName === categoryName));
    }, [setProducts]);

    return (
        <>
            <div style={{ width: '60%', marginRight: 'auto', marginLeft: 'auto' }}>
                <div style={{ textAlign: 'right' }}>
                    <Button onClick={() => { setSort('oreum') }} onChange={sortProducts(sort)}>낮은가격순</Button>
                    <Button onClick={() => { setSort('naerim') }} onChange={sortProducts(sort)}>높은가격순</Button>
                </div>
                <span style={{ textAlign: 'left' }}><h3>전체 상품</h3></span>

                <div style={{ width: '500', textAlign: "center" }}>
                    <DivGrid>
                                {products.map(item =>
                                    <DivItem key={item.id}>
                                        <Link to={`/product/${item.id}`} id={`${item.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                                            <ProductItem item={item} />
                                        </Link>
                                    </DivItem>
                                )
                                }
                    </DivGrid>
                </div>

                {store.items = []}
            </div>
        </>
    );
};

export default ProductList;
