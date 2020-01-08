import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import MenuCategory from './MenuCategory';
import { getCategories } from '../services/productsCategoryService';

const ListDiv = styled.div`
    width: 1120px;
    max-width: none !important;
    height: 50px;
    margin: 0 auto;
    text-align: center;
`;

const Ul = styled.ul`
    display: grid;
    grid-template-columns: 150px 100px 100px 100px 100px 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Li = styled.div`
     width: 10%;
    height: auto;
    list-style-type: none;
    float: left;
    left: 50%;
    text-align: center;
    padding: 5px;
    min-width: 120px;
    font-weight: 600;
`;

function Menu() {
  const [productsCategoryArr, setProductsCategoryArr] = useState([]);

  useEffect(() => {
    let isMount = true;
    getCategories().then((value) => {
      if (isMount) {
        setProductsCategoryArr(Object.entries(value));
      }
    });

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <ListDiv>
      <Ul>
        <Li>
          <Link to="/product/new">
            상품 등록
          </Link>
        </Li>
        {productsCategoryArr.map((category, index) => (
          <Li key={index}>
            <MenuCategory categoryName={category[1]} categortId={category[0]} />
          </Li>
        ))}
      </Ul>
    </ListDiv>
  );
}

export default Menu;
