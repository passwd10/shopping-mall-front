// 3. 검색어와 일치하는 제품이 있다면 이름일치하는 제품, 해당제품의 카테고리 순으로 출력
// 4. 2개이상 겹치는 단어가 있는가?
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import productStore from '../stores/productStore';

function CantFind(props) {
    return (
        <>
            <h1>'{props.keyword}' 검색결과</h1>
            <h2>해당 상품을 찾을 수 없습니다.</h2>
        </>
    )
}

function CanFind(props) {

    const foundItems = props.items;

    searchCompleted.items = [];

    return (
        <>    
            <h1>'{props.keyword}' 검색결과</h1>
            {foundItems.map(item => 
                <div key = {item.id}>
                    <Link to={`/product/${item.id}`} id={`${item.id}`}>
                        <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" width="20%" />
                    </Link>
                    <h2> {item.title} </h2>
                    <h3> {item.price} 원 </h3>
                </div>
            )}

            
        </>
    )
}

const searchCompleted = {
    items: [],
}

function SearchResult() {
    const { keyword } = useParams();
    const [state, setState] = useState(productStore.products);

    let isFind = 0;

    state.map(item => {
        if (item.title.indexOf(keyword) != -1) {
            isFind = 1;
            searchCompleted.items = [
                ...searchCompleted.items,
                { id: item.id, title: item.title, category: item.category, detail: item.detail, img: item.img, price: item.price }
            ]
        }
    })

    if (isFind == 1) {
        return <CanFind keyword={keyword} items={searchCompleted.items} />
    } else {
        return <CantFind keyword={keyword} />
    }
}

export default SearchResult;