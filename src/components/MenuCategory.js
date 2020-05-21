import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Span = styled.span`
    color: black;
    font-size: 20px;
`;

function MenuCategory({ categoryName, categoryId }) {
  return (
    <>
      <Link to={`/category/group/${categoryId}`}>
        <Span>{categoryName}</Span>
      </Link>
    </>
  );
}

export default MenuCategory;
