import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { product } from "../../data";

function Cosmetic() {


    const [state, setState] = useState(product);

    return (
        <>
            <h3>상세페이지를 보려면 이미지를 클릭 해주세요</h3>
            <div>
                {state.map(item => {
                    return (item.id >= 400 && item.id < 500) ?
                        <div key={item.id}>
                            <h1>
                                <b>{item.title}</b>
                                <p> {item.price} 원 </p>
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

export default Cosmetic;