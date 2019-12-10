import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { cartList } from "../stores/productStore";

function ProductCartList() {
    let uniq = {};
    const deDupMyCartList = cartList.cartLists.filter(obj => !uniq[obj.productId] && (uniq[obj.productId] = true)); //장바구니 중복제거
    const myCartList = cartList.setCartLists(deDupMyCartList);

    const [cList, setCList] = useState([]); // 장바구니 상태
    const [estPrice, setEstPrice] = useState(0);    //예상 가격 상태
    
    const deleteList = (id) => {
        return cartList.setCartLists(myCartList.filter(list => list.id != id));
    };

    const onChangeList = (id) => {
        cartList.setCartListPurchase(id);
        calculatePrice();
    };

    const calculatePrice = () => {
        let resultPrice = 0;
        myCartList.filter(product => product.purchase == true).map(product => resultPrice += Number(product.price));
        setEstPrice(resultPrice);
    }

    useEffect(() => {
        console.log(myCartList);
        calculatePrice();
    },[]);

    console.log('장바구니', cList);

    return (
        <>
            <h1>장바구니</h1>
            <h4>장바구니 목록</h4>
            <ul>
                <li>상품정보</li>
                <li>가격</li>
                <li>수량</li>
            </ul>
            
            <div>
                <span>장바구니 수량 : {myCartList.length} 개</span>
            </div>
            <ul>
                {myCartList.map(cartList =>
                    <ul key={cartList.id}>
                        <form>
                            <input type="checkbox" defaultChecked={cartList.purchase} onChange={() => onChangeList(cartList.id)} />
                        </form>
                        <li><img src={cartList.img} width="30%"></img>{cartList.title}</li>
                        <li>{cartList.price}원</li>
                        <button onClick={() => setCList(deleteList(cartList.id))}>삭제</button>
                    </ul>
                )}
            </ul>
                
            <div>
                <span>예상 가격 : {estPrice} 원</span>
            </div>
            
            <Link to={`/order/purchaseRequest/999`}>
                <button>구매하기</button>   
            </Link>
        </>
    )
}

export default ProductCartList;