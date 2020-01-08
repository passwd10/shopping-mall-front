import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { searchProducts } from '../services/searchService';

const searchCompleted = {
  items: [],
}

function CantFind(props) {

  return (
    <>
      <h1>'{props.keyword}' 검색결과</h1>
      <h2>해당 상품을 찾을 수 없습니다.</h2>
    </>
  )
}

function CanFind(props) {
  const foundItems = props.items;
  searchCompleted.items = [];
  return (
    <>
      <h1>'{props.keyword}' 검색결과</h1>
      {foundItems.map(item =>
        <div key={item.id}>
          <Link to={`/product/${item.id}`} id={`${item.id}`}>
            <img
              src={item.img} width='20%'
              className='itemImg'
              alt='이미지를 띄울 수 없습니다'
            />
          </Link>
          <h2> {item.title} </h2>
          <h3> {item.price} 원 </h3>
        </div>
      )}
    </>
  )
}

function SearchResult(props, { locatoin }) {
  const [products, setProducts] = useState([]);

  const { q } = queryString.parse(location.search);
  const keyword = q;

  useEffect(() => {
    getProducts();
  }, [props.keyword])

  const getProducts = () => {
    searchProducts(q).then(setProducts);
  }

  const productsExist = () => products.length > 0;

  return productsExist()
    ? <CanFind keyword={keyword} items={products} />
    : <CantFind keyword={keyword} />
}

export default SearchResult;