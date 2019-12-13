import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Span = styled.span`
    color: black;
    font-size: 15px;
`;

function MenuCategory({ categoryName, categortId }) {
    return (
        <>
            <Link to={`/category/group/${categortId}`}>
                <Span>{categoryName}</Span>
            </Link>
        </>
    );
}

export default MenuCategory;