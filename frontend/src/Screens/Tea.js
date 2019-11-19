import React, { useEffect, useState } from "react";

import { product } from "../../data";

const Tea = () => {

    const [state, setState] = useState(product);

    return (
        <>
            <h1>
                상품 정보
            </h1>
            <div>
                {state.map(item => {
                    return (item.id >= 200 && item.id < 300) ?
                        <div key={item.id}>
                            <h1>
                                <b>{item.title}</b>
                            </h1>
                            <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" />
                            <p>
                                {item.price}
                            </p>
                        </div> : null
                     }
                    )
                }
            </div>
        </>
    );
};

export default Tea;