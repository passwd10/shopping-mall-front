import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SearchForm = styled.form`
    text-align: center;
    width: 100%;
    margin-top: 10px;
`;

const SearchInput = styled.input`
    display: inline-block;
    width: 366px; height: 40px;
    border: 3px solid #5f0080;
    background: white;
    padding: 10px;
`;

const SearchBtn = styled.button`
    width: 54px; height: 40px;
    margin: 0px; border: 0px;
    background-color: #5f0080;
  	color: white;
	  vertical-align: top;
    font-weight: bold;
    border-radius: 1px;
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
        <SearchInput 
          onChange={v => setSearchValue(v.target.value)} value={searchValue}
          type="text" id="inputSearchValue" placeholder="상품명을 입력해주세요"
        />
        <Link to={`/products/search?q=${searchValue}`}>
          <SearchBtn
            onClick={sendSearchKeywordToAlwaysTop}
            type="submit" id="search_btn"
          >
            검색
          </SearchBtn>
        </Link>
      </SearchForm>
    </>
  );
}

export default Search;