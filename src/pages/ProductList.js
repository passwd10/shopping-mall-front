import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

import ProductItem from '../components/ProductItem';

import { getCategories } from '../services/productsCategoryService';
import { getProducts } from '../services/productService';

import styled from 'styled-components';

const SearchResultBody = styled.div`
  width: 500;
  textAlign: center;
`

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 330px 330px 330px;
    grid-auto-rows: 400px;
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

let newGroupId = 0;

function ProductList() {
  const { groupId } = useParams();
  const [sort, setSort] = useState('');
  const [products, setProducts] = useState([]);
  let categoryName;

  if (groupId === undefined) {
    getProducts().then(value => {
      if(groupId !== newGroupId) {
        newGroupId = groupId;
        setProducts(value);
      }
    });
    categoryName = '';
  } else {
    getCategories().then(v => categoryName = v[groupId - 1].categoryName)

    getProducts().then(value => {
      if (groupId !== newGroupId) {
        newGroupId = groupId;
        setProducts(value.filter(product => product.categoryName === categoryName));
      }
    });
  }

  const sortProducts = v => {
    if (v === 'oreum') {
      return products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (v === 'naerim') {
      return products.sort((a, b) => {
        return b.price - a.price;
      });
    }
  };

  useEffect(() => {
    getProducts().then(value => {
      categoryName === '' ?
        setProducts(value) :
        setProducts(value.filter(product => product.categoryName === categoryName))
    });
  }, [setProducts]);

  return (
    <>
      <div style={{ width: '60%', marginRight: 'auto', marginLeft: 'auto' }}>
        <div style={{ textAlign: 'right' }}>
          <Button onClick={() => { setSort('oreum') }} onChange={sortProducts(sort)}>낮은가격순</Button>
          <Button onClick={() => { setSort('naerim') }} onChange={sortProducts(sort)}>높은가격순</Button>
        </div>
        <span style={{ textAlign: 'left' }}><h3>전체 상품</h3></span>

        <SearchResultBody>
          <DivGrid>
            {products.map(item =>
              <DivItem key={item.id}>
                <Link to={`/product/${item.id}`} id={`${item.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                  <ProductItem item={item} />
                </Link>
              </DivItem>
            )}
          </DivGrid>
        </SearchResultBody>
      </div>
    </>
  );
};

export default ProductList;