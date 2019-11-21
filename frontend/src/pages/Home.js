import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div>
                <h2>쇼핑몰에 오신걸 환영합니다.</h2>
            </div>
            <h2>상품 카테고리</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/category/group/1" id="견과류">견과류</Link>
                    </li>
                    <li>
                        <Link to="/category/group/2" id="음료">음료</Link>
                    </li>
                    <li>
                        <Link to="/category/group/3" id="스포츠">스포츠</Link>
                    </li>
                    <li>
                        <Link to="/category/group/4" id="화장품">화장품</Link>
                    </li>
                    <li>
                        <Link to="/product/new">+ 상품추가</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Home;