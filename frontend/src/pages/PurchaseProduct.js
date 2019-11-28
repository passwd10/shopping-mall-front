import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import productStore from "../stores/productStore";

function PurchaseProduct(props) {

    const { productId } = useParams();
    const product = productStore.getProduct(productId);

    console.log(product);

    return (
        <>
            <h1>주문/결제 페이지입니다.</h1>
            <div className='order_info_member'>
                <h4>배송 정보</h4>
                <tbody>
                    <tr>
                        <th>주문자</th>
                        <td>
                            <div>
                                <span>
                                    박인서
                            </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <div>
                                <span>
                                    <input type="text" />
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>
                            <div>
                                <span>
                                    010-1234-5678
                            </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>
                            <div>
                                <span>
                                    이태원
                            </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>배송시 요청사항</th>
                        <td>
                            <div>
                                <span>

                                    <select id='productCategory'>
                                        <option value={undefined} key={0}>배송시 요청사항 선택</option>
                                        <option value={undefined} key={1}>부재시 경비실에 맡겨주세요</option>
                                        <option value={undefined} key={2}>부재시 집앞에 놓아주세요</option>
                                        <option value={undefined} key={3}>집 앞에 놓아주세요</option>
                                    </select>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </div>

            <div className='order_product'>
                <h4>주문상품 정보</h4>
                <thead>
                    <tr>
                        <th>상품정보/ 수량</th>
                        <th>상품금액</th>
                        <th>배송비</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="td_info">

                            <div className="basic_type">
                                <span className="thum">
                                    <img src={product.img} width="70" height="70" alt="이미지를 불러올 수 없습니다" />
                                </span>

                                <div className="prd_info">
                                    <div className="product_title">{product.title}</div>
                                    <div className="option_qty">1개</div>

                                </div>
                            </div>
                        </td>

                        <td className="td_discount">
                            <span className="price">{product.price}</span><span className="won">원</span>
                        </td>
                        <td>
                            <span className='delivery_price'>무료</span>
                        </td>
                                                        
                    </tr>
            
            </tbody>

            <span>최종 결제 가격 : </span><span>{product.price}원 </span>
            <button>결제하기</button>
        </div>
        </>
    )
}

export default PurchaseProduct;