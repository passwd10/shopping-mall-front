import React from "react";
import { Link } from "react-router-dom";

import styled from 'styled-components';

const ListDiv = styled.div`
    
    width: 1120px;
    max-width: none !important;
    height: 150px;

    /* top: 0; left: 0; right: 0px; */
    margin: 0 auto;
 
    /* border: 1px solid #3d3d; */

    /* width: 80%;
    height: auto;
    position: fixed;
    top:0; bottom:0; left: 50%; right: 50%;
    padding: 20px; */
    border: 1px solid #9acb;
`;

const Ul = styled.ul`
    /* display: block; */
    /* float: left; */
    /* top: 0; left: 0; */
    width: 100%;
    /* height: auto; */
    margin-left: 110px;
    /* margin-right: auto; */
    /* margin: 0 auto; */
    /* border: 1px solid #9acb; */
    text-align: center;
`;

const Li = styled.li`
     width: 10%;
    height: auto;
    list-style-type: none;
    float: left;
    left: 50%;

    font-size: 17px;
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



function Home() {

    return (
        <>
            <ListDiv>
                <Ul>
                    <Li>
                        상품 카테고리
                    </Li>
                    <Li>
                        <Link to="/category/group/1" id="견과류">견과류</Link>
                    </Li>
                    <Li>
                        <Link to="/category/group/2" id="음료">음료</Link>
                    </Li>
                    <Li>
                        <Link to="/category/group/3" id="스포츠">스포츠</Link>
                    </Li>
                    <Li>
                        <Link to="/category/group/4" id="화장품">화장품</Link>
                    </Li>
                    <Li>
                        <Link to="/product/new">+ 상품추가</Link>
                    </Li>
                </Ul>
            </ListDiv>
        </>
    );
}


export default Home;