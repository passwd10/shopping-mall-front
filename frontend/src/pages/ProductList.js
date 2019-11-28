import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productStore, { productsCategory } from '../stores/productStore';
import SortProduct from '../components/SortProduct';

const store = {
    items: [],
};

const state = {
    products: [],
}

function ProductList() {
    const { groupId } = useParams();
    const [sort, setSort] = useState('');
    const categoryName = productsCategory[groupId];
    // productStore.getCategoryTitle(groupId);
    const [products, setProducts] = useState(productStore.products.filter(product => 
        product.categoryName == categoryName));
    
    // const onChangeSort = v => {
    //     let sortItems = [];

    //     if(v == 'oreum') {
    //         sortItems = products.sort((a,b) => {
    //             return b.price - a.price;
    //         });
    //         console.log('dodododown');
    //         setProducts(sortItems);
    //     }
    //     if(v == 'naerim') {
    //         sortItems = products.sort((a,b) => {
    //             return a.price - b.price;
    //         });
    //         console.log('upupup');
    //         setProducts(sortItems);
    //     }
    // };
    useEffect(() => {
        if(sort == 'oreum') {
            console.log('oreum');
            setProducts(products.sort((a,b) => {
                console.log(`a.title ${a.title}`,a.price);
                console.log(`b.title ${b.title}`,b.price);
                console.log(`b.title - a.title ${b.title} - ${a.title}`,b.price-a.price);
                console.log(products[0],products[1]);
                return b.price - a.price;
            }));
        }
        if(sort == 'naerim') {
            console.log('naerim');
            setProducts(products.sort((a,b) => {
                console.log(`a.title ${a.title}`,a.price);
                console.log(`b.title ${b.title}`,b.price);
                console.log(`a.title - b.title ${a.title} - ${b.title}`,a.price-b.price);
                console.log(a,b);
                return a.price - b.price;
            }));
        }
      }, [sort]);

    return (
        <>            
            <button onClick={() => {setSort('oreum')}}>낮은가격순</button>
            <button onClick={() => {setSort('naerim')}}>높은가격순</button>

            <h3>상세페이지를 보려면 이미지를 클릭 해주세요</h3>

            <div>        
                {products.map(item =>
                    <div key={item.id}>
                        <Link to={`/product/${item.id}`} id={`${item.id}`}>
                            <img src={item.img} className="itemImg" alt="이미지를 띄울 수 없습니다" width="30%" />
                        </Link>
                        <h2> {item.title} </h2>
                        <h3> {item.price} 원 </h3>
                    </div>
                )
                }
            </div>

            {store.items = []}
        </>
    );
};

export default ProductList;