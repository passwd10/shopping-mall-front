import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

import productStore, { productsCategory } from '../stores/productStore';
import sortProducts from '../service/sortProducts';

import styled from 'styled-components';

const Table = styled.table`
    width: 1000px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const Button = styled.button`
    color: black;
    background-color: pink;
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
        setProducts(productStore.products.filter(product =>
            product.categoryName == categoryName));
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

    return (
        <>
            <div style={{width: '60%', marginRight: 'auto', marginLeft: 'auto'}}>
                
                <div style={{ textAlign: 'right' }}>
                    <Button  onClick={() => { setSort('oreum') }} onChange={sortProducts(sort)}>낮은가격순</Button>
                    <Button onClick={() => { setSort('naerim') }} onChange={sortProducts(sort)}>높은가격순</Button>
                </div>
                <span style={{ textAlign: 'left' }}><h3>전체 상품</h3></span>

                <div style={{ width: '500', textAlign: "center" }}>
                    <Table border="1">
                        <tbody>
                            <tr align="center">
                                {products.map(item =>
                                    <td key={item.id}>
                                        <Link to={`/product/${item.id}`} id={`${item.id}`}>
                                            <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" width="30%" />
                                        </Link>
                                        <h2> {item.title} </h2>
                                        <h3> {item.price} 원 </h3>
                                    </td>
                                )
                                }
                            </tr>

                        </tbody>

                    </Table>
                </div>

                {store.items = []}
            </div>
        </>
    );
};

export default ProductList;
