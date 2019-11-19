/* Contains a form with the input element and the search button, 
contains functions that handle the input element and resets the field, 
and also contains a function that calls the search function which is passed as props to it. */

import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => { //이벤트가 발생하면 상태 update
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {   //검색 후 input창 초기화
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault(); // 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
    props.search(searchValue); 
    resetInputField();
  }

  return (
        <form className = "search">
            <input value = {searchValue}
             onChange = {handleSearchInputChanges} // e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있습니다. 즉 상태 update
              type = "text" 
              placeholder = "상품 입력"/>
            <input onClick = {callSearchFunction} type = "submit" value = "검색" />
        </form>
    );
}

export default Search;