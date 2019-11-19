/*A simple component that renders the app header and accepts a title prop */

import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <h2>상품 종류</h2>

      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/product/new">+ 상품추가</Link>
          </li>
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
        </ul>
      </div>
  </>
);

export default Header;