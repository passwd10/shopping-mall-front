// 1. 검색버튼을 눌렀을때 해당 검색어가 넘어오는지 확인하기 (검색어가 콘솔창에 찍힘)
// 2. 검색어가 포함된 새로운 url을 띄워줌
// 3. 검색어와 일치하는 제품이 있다면 이름일치하는 제품, 해당제품의 카테고리 순으로 출력

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const SearchForm = styled.form`
    text-align: center;
    width: 100%;
    /* top: 0px; bottom: 0; left: 20px; right: 0; */
    margin-top: 10px;

`;

const SearchInput = styled.input`
    display: inline-block;
    width: 366px; height: 40px;
    border: 3px solid #006C00;
    background: white;
    padding: 10px;
`;

const SearchBtn = styled.button`
    width: 54px; height: 40px;
    margin: 0px; border: 0px;
    color: white;
    vertical-align: top;
    font-weight: bold;
    border-radius: 1px;
    background: #006C00;
    cursor: pointer;
`;

function Search() {
    const [searchValue, setSearchValue] = useState("");

    const checkSearchvalue = async (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <>
            <SearchForm name="searchForm" onSubmit={checkSearchvalue}>
                <SearchInput type="text" id="inputSearchValue" placeholder="상품명을 입력해주세요"
                    onChange={v => setSearchValue(v.target.value)} value={searchValue} />
                
                <Link to = {`/search/${searchValue}`}>
                    <SearchBtn type="submit" id="search_btn">검색</SearchBtn>
                </Link>
            </SearchForm>
        </>
    );
}


export default Search;