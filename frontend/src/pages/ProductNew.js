import React, {useState} from "react";

import productStore from "../stores/productStore";

function ProductNew() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState();
    const [fileName, setFileName] = useState('이미지 파일 선택');
    const [img, setImg] = useState();

    const categories = productStore.getCategories();

    const onRegister = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        productStore.createProduct({
            title,
            category,
            detail,
            img,
            price,
        })
    };

    const onCategoryChange = (event) => {
        setCategory(event.target.value ? event.target.value : undefined);
    };

    const onChangeFile = (event) => {
        if (event.target.files != null && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            setImg(event.target.files[0]);
          }
    };

    return (
        <>
            <h2>상품 등록 하기</h2>
            <form name = "productRegister" onSubmit = {onRegister}>
                <div className="inputArea">
                    <label> 카테고리 </label>
                    <select id="productCategory" onChange={onCategoryChange} value = {category}>
                        <option value = {undefined}>카테고리를 선택해주세요.</option>
                        {categories.map(ca  => 
                            <option key={ca.id}> {ca.title} </option>
                        )}
                    </select>
                </div>

                <div className="inputArea">
                    <label> 상품명 </label>
                    <input type="text" id="productTitle" placeholder="상품명을 작성해주세요."
                        onChange = {v => setTitle(v.target.value)} value = {title}/>
                </div>

                <div className="inputArea">
                    <label> 상품 가격 </label>
                    <input type="number" id="productPrice" min="0" step="1000" placeholder="가격을 입력해주세요."
                    onChange = {v => setPrice(v.target.value)} value = {price}/>
                </div>

                <div className="inputArea">
                    <label> 상품 소개 </label>
                    <textarea rows="5" cols="50" id="productDetail" placeholder="상품을 소개해주세요."
                    onChange = {v => setDetail(v.target.value)} value = {detail}></textarea>
                </div>

                <div className="form-group form-picture">
                    <div className="file-box">
                        <label> 상품 이미지 등록 </label>
                        <input className="upload-name" value = {fileName} disabled />

                        <label htmlFor="ex_filename" className="btn btn-secondary">업로드</label>
                        <input type="file" accept ="image/*" id="ex_filename" className="upload-hidden" onChange={onChangeFile} />
                    </div>
                </div>


                <div className="inputArea">
                    <button type="submit" id="register_btn">등록</button>
                </div>
            </form>
        </>
    )
}

export default ProductNew;