import React from "react";

import productStore from "../stores/productStore";

function ProductNew() {

    const categories = productStore.getCategories();

    console.log('categories : ', categories);

    return (
        <>
        <div className = "inputArea">
            <label>카테고리</label>
            <select className="category">
            {categories.map(category => 
                <option value="">{category.title}</option>
            )
                
            }
            
            </select>
        </div>
        
        <div className = "inputArea">
            <label>상품명</label>
            <input type = "text" id="gdsName"/>
        </div>

        <div className = "inputArea">
            <label>상품가격</label>
            <input type = "text" id="gdsPrice"/>
        </div>

        <div className = "inputArea">
            <label>상품소개</label>
            <textarea rows="5" cols="50" id="gdsDes"></textarea>
        </div>
        <div className = "inputArea">
            <label>상품 이미지</label>
            <input type = "image" id="gdsImg" alt="Submit"/>
        </div>

        <div className = "inputArea">
            <button type="submit" id="register_btn">등록</button>
        </div>
        </>
    )
}

export default ProductNew;