import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import MenuCategory from './MenuCategory';
import { getCategories } from '../services/productsCategoryService';

const ListDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CategoryUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px 12px;
    margin-bottom: 0;
`;

const CategoryLi = styled.li`
  list-style-type: none;
  text-decoration: none;
  text-align: center;
  padding: 0 20px;
  min-width: 200px;
  font-size: 20px;
  font-weight: 500;
  border-right: 0.5px #A9A9A9 solid;
  &:hover {
    background-color: #6495ED;
    border-radius: 4px;
  } 
`;

const CategoryLiEnd = styled.li`
  list-style-type: none;
  text-decoration: none;
  text-align: center;
  padding: 0 20px;
  min-width: 200px;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    background-color: #6495ED;
    border-radius: 4px;
  } 
`;

const DropCategoryUl = styled.ul`
  position: absolute;
  z-index: 1;
  width: 200px;
  margin-left: -20px;
  background-color: white;
  padding-inline-start: 0px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #D3D3D3;
`;

const DropCategoryLi = styled.li`
  list-style-type: none;
  text-align: center;
  justify-content: center;
  padding: 4px 8px;

`;


function Menu() {
  const [productsCategoryArr, setProductsCategoryArr] = useState([]);
  const [showCategories, setShowCategory] = useState(false);

  useEffect(() => {
    let isMount = true;
    getCategories().then((value) => {
      if (isMount) {
        setProductsCategoryArr(value);
      }
    });

    return () => {
      isMount = false;
    };
  }, []);

  const toggleCategory = (e) => {
    e.preventDefault();
    setShowCategory(!showCategories);
  }

  return (
    <ListDiv>
      <CategoryUl>
        <CategoryLi onMouseEnter={toggleCategory} onMouseLeave={toggleCategory}>
          카테고리
          {showCategories &&
            <DropCategoryUl>
              <DropCategoryLi>
                <Link to="/product/new">
                  상품 등록
                </Link>
              </DropCategoryLi>
              {productsCategoryArr.map((category, index) => (
                <DropCategoryLi key={index}>
                  <MenuCategory categoryName={category.categoryName} categoryId={category.categoryId} />
                </DropCategoryLi>
              ))}
            </DropCategoryUl>}
        </CategoryLi>
        <CategoryLi>
          베스트
        </CategoryLi>
        <CategoryLi>
          특가
        </CategoryLi>
        <CategoryLi>
          이벤트
        </CategoryLi>
        <CategoryLiEnd>
          신상품
        </CategoryLiEnd>
      </CategoryUl>
    </ListDiv>
  );
}

export default Menu;
