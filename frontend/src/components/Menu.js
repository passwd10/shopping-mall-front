import React, { useState } from 'react';

import styled from 'styled-components';

import MenuCategory from '../components/MenuCategory';
import { getCategory } from '../apis/task';


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
    /* margin: 0 auto; */
    /* color: #333; */
    padding: 5px;

    min-width: 120px;
    font-weight: 600; 
    /* -webkit-appearance: none; */
    /* border: 0px; */
    /* cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
    background-color: white; */
`;



function Menu() {
    const [productsCategoryArr, setProductsCategoryArr] = useState([]);

    getCategory().then(value => {
        setProductsCategoryArr(Object.entries(value));
    });

    return (
        <ListDiv>
            <Ul>
                <Li>
                    상품 카테고리
                </Li>
                {productsCategoryArr.map((category, index) =>
                    <Li key={index}>
                        <MenuCategory categoryName={category[1]} categortId={category[0]} />
                    </Li>
                )}
            </Ul>
        </ListDiv>
    )
}

export default Menu;