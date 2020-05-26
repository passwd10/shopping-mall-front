import React, { useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

import { getProducts } from '../services/productService';
import { addCart } from '../services/cartService';

const Div = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	/* justify-content: center; */
  /* align-items: center; */
  width: 60%;
	margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

const BuyButton = styled.button`
	background-color: #6495ED;
	color: white;
	padding: 10px;
	padding-left: 40px;
	padding-right: 40px;
	border-radius: 5px;
	margin-right: 20px;
`;

const CartButton = styled.button`
	color: #333;
	background-color: white;
	padding: 10px;
	padding-left: 40px;
	padding-right: 40px;
	border-radius: 5px;
	border: 1px solid #333;
`;

const DetailDiv = styled.div`
	font-size: 20px;
	margin-top: 30px;
`
const DetailTitleDiv = styled.div`
	font-size: 30px;
	margin-top: 30px;
`

const initialProduct = {
	title: '',
	img: '',
	categoryId: 0,
	categoryName: '',
	price: 0,
	detail: '',
};

function reducer(state, action) {
	switch (action.type) {
		case 'addProduct': {
			return {
				...state,
				title: action.title,
				img: action.img,
				categoryId: action.categoryId,
				categoryName: action.categoryName,
				price: action.price,
				detail: action.detail,
			};
		}
	}
}

function ProductDetail() {
	const { productId } = useParams();
	const [productState, dispatch] = useReducer(reducer, initialProduct);

	const linkToPurchase = `/order/purchaseRequest/${productId}`;
	const linkToLogin = `/user/login`;
	const link = localStorage.getItem('isLogin') === 'true' ? linkToPurchase : linkToLogin;
	
	const fetchMyApi = async () => {
		try {
			const saveData = await getProducts();
			dispatch({
				type: 'addProduct',
				title: saveData[productId - 1].title,
				img: saveData[productId - 1].img,
				categoryId: saveData[productId - 1].categoryId,
				categoryName: saveData[productId - 1].categoryName,
				price: saveData[productId - 1].price,
				detail: saveData[productId - 1].detail
			});
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		fetchMyApi();
	}, []);

	const addToCart = () => {
		addCart(productId);
	}

	return (
		<Div>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<img src={productState.img} alt="" width="60%" />
			</div>
			<div>
				<DetailTitleDiv>
					{productState.title}
				</DetailTitleDiv>
				<DetailDiv>
					{productState.price} 원
				</DetailDiv>
				<DetailDiv>
					카테고리 : {productState.categoryName}
				</DetailDiv>
				<DetailDiv>
					상품설명 : {productState.detail}
				</DetailDiv>
				<div style={{ marginTop: '30px' }}>
					<span style={{ fontSize: '15px', marginTop: '30px', marginRight: '20px' }}>
						옵션 선택
					</span>
					<select width='300px' id='selectPurchaseOpt'>
						<option value={undefined} key={0}>
							옵션을 선택하세요
							</option>
						<option value={undefined} key={1}>
							기본 / 가격 : {productState.price}원
						</option>
					</select>
				</div>
				<div style={{ display: 'flex', marginTop: '30px' }}>
						<Link to={link}>
							<BuyButton>
								구매하기
              </BuyButton>
						</Link>
						<CartButton onClick={addToCart}>
							장바구니 담기
            </CartButton>
				</div>
			</div>
		</Div>
	);
}

export default ProductDetail;