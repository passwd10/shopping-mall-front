import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import productStore from '../stores/productStore';
import SortProduct from '../components/SortProduct';

const store = {
    items: [],
};

const state = {
    products: [],
}

function Category() {
    const { groupId } = useParams();
    const [sort, setSort] = useState('');
    const { id, title } = productStore.getCategoryTitle(groupId);
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState(productStore.products.filter(product => 
        product.category == title));
    
    // const thisCategoryitemList = state.filter(item => {
    //     if (item.category == title) {
    //         return store.items = [
    //             ...store.items,
    //             { id: item.id, title: item.title, category: item.category, detail: item.detail, img: item.img, price: item.price },
    //         ];
    //     }
    // });

    // const changeItemList = (itemList) => {
    //     if(itemList.length == store.items.length && itemList.length != state.length) {
    //         setState(itemList,[]);
    //     }
    // }

    // console.log('Rstate',state);   

    const onChangeSort = v => {
        let sortItems = [];

        if(v == 'down') {
            sortItems = products.sort((a,b) => {
                return b.price - a.price;
            });
            console.log('dodododown');
            setProducts(sortItems);
        }
        if(v == 'up') {
            sortItems = products.sort((a,b) => {
                return a.price - b.price;
            });
            console.log(sortItems);
            setProducts(sortItems);
        }
    };
    useEffect(() => {
        if(sort == 'down') {
            onChangeSort('down');
        }
        if(sort == 'up') {
            // onChangeSort('up');
            setProducts(products.sort((a,b) => {
                return a.price - b.price;
            }));
        }
      }, [sort]);

    return (
        <>
            {/* {changeItemList(thisCategoryitemList)} */}
            
            <button onClick={() => {setSort('down')}}>낮은가격순</button>
            <button onClick={() => {setSort('up')}}>높은가격순</button>

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

export default Category;