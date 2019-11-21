// 3. 검색어와 일치하는 제품이 있다면 이름일치하는 제품, 해당제품의 카테고리 순으로 출력
// 4. 2개이상 겹치는 단어가 있는가?
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import productStore from '../stores/productStore';

function CantFind(props) {    
    return (
        <>
            <h1>'{props.title}' 검색결과</h1>
            <h2>해당 상품을 찾을 수 없습니다.</h2>
        </>
    )
}

function CanFind(props) {
    const [state, setState] = useState(productStore.products);

    return (
        <>
            <h1>'{props.title}' 검색결과</h1>

            <Link to={`/product/${props.id}`} id={`${props.id}`}>
                <img src={props.img} className="itemImg" alt="이미지를 띄울 수 없습니다" width = "20%"/>
            </Link>
            <h2> {props.title} </h2>
            <h3> {props.price} 원 </h3>
        </>
    )
}

function SearchResult() {
    const { keyword } = useParams();
    const [state, setState] = useState(productStore.products);

    let isFind = 0;

    const searchCompletedItem = {
        id: "",
        title : "",
        category : "",
        detail : "",
        img : "",
        price : "",
    }
    
    state.map(item => {
        if(keyword == item.title) {
            isFind = 1;
            searchCompletedItem.id = item.id;
            searchCompletedItem.title = item.title;
            searchCompletedItem.category = item.category;
            searchCompletedItem.detail = item.detail;
            searchCompletedItem.img = item.img;
            searchCompletedItem.price = item.price;
        }
    })

    if(isFind == 1) {
        return <CanFind id={searchCompletedItem.id}
                        title={searchCompletedItem.title} 
                        category={searchCompletedItem.category}
                        detail={searchCompletedItem.detail}
                        img={searchCompletedItem.img}
                        price={searchCompletedItem.price} />
    } else {
        return <CantFind title={keyword}/>
    }
}

export default SearchResult;