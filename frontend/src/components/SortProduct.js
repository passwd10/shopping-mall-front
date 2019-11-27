//상품 정렬
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import productStore from '../stores/productStore';

function SortProduct(props) {
    const { groupId } = useParams();
    const category = productStore.getCategoryTitle(groupId);

    const [state, setState] = useState(props.items);

    console.log('hi');
    console.log('state',state);

    return (
        <>            
            <h3>상세페이지를 보려면 이미지를 클릭 해주세요</h3>
            <div>
                {state.map(item => {
                    return (item.category == category.title) ?
                        <div key={item.id}>

                            <Link to={`/product/${item.id}`} id={`${item.id}`}>
                                <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" width="30%" />
                            </Link>
                            <h2> {item.title} </h2>
                            <h3> {item.price} 원 </h3>
                        </div> : null
                }
                )
                }
            </div>
        </>
    );
}

export default SortProduct;