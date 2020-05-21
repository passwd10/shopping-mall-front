import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import ProductItem from '../components/ProductItem';

import { searchProducts } from '../services/searchService';

import styled from 'styled-components';

const SearchTitle = styled.h1`
  text-align: center;
  width: 100%;
  margin: 20px;
`

const SearchBody = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchKeyword = styled.p`
  width: 100%;
  margin: 0;
  margin-left: 100px;
  font-size: 20px;

`
const CntResult = styled.p`
  width: 100%;
  margin: 0;
  margin-left: 100px;
`

const SearchResultBody = styled.div`
  width: 500;
  textAlign: center;
`

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 330px 330px 330px;
    grid-auto-rows: 400px;
    grid-auto-rows
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

function SearchResult(props) {
  const [products, setProducts] = useState([]);

  const { q } = queryString.parse(location.search);

  useEffect(() => {
    searchProducts(q).then(setProducts);
  }, [props.keyword])

  return (
    <SearchBody>
      <SearchTitle>상품 검색</SearchTitle>
      <SearchKeyword>'{q}' 검색결과</SearchKeyword>
      <CntResult>총 {products.length}의 상품이 검색되었습니다.</CntResult>
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
    </SearchBody>
  )
}

export default SearchResult;