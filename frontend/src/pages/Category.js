import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productStore from '../stores/productStore'

function category() {

    const { groupId } = useParams();
    const category = productStore.getCategoryTitle(groupId);

    const [state, setState] = useState(productStore.products);

    return (
        <>
            <h3>상세페이지를 보려면 이미지를 클릭 해주세요</h3>
            <div>
                {state.map(item => {
                    return (item.category == category.title) ?
                        <div key={item.id}>
                            <h1>
                                <b>{item.title}</b>
                                <p>{item.price} 원 </p>
                            </h1>

                            <Link to={`/product/${item.id}`} id={`${item.id}`}>
                                <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" />
                            </Link>
                            <p></p>
                        </div> : null
                }
                )
                }
            </div>
        </>
    );
};

export default category;