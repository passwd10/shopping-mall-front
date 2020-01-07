import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { searchProducts } from "../services/searchService";


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

function Search(props) {
    const [searchValue, setSearchValue] = useState("");

    const checkSearchValue = async (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const sendSearchKeywordToAlwaysTop = () => props.searchCallBack(searchValue);

    return (
        <>
            <SearchForm name="searchForm" onSubmit={checkSearchValue}>
                <SearchInput type="text" id="inputSearchValue" placeholder="상품명을 입력해주세요"
                    onChange={v => setSearchValue(v.target.value)} value={searchValue} />
                <Link to={`/products/search?q=${searchValue}`}>
                    <SearchBtn type="submit" id="search_btn" onClick={sendSearchKeywordToAlwaysTop}>검색</SearchBtn>
                </Link>
            </SearchForm>
        </>
    );
}


export default Search;