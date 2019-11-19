import React, { useReducer, useEffect, useState } from "react";
import Search from "./Search-shop";
import Header from "./Header";

import Routes from './Routes';
import { Link } from "react-router-dom";

import Nut from '../Screens/Nut';

import {category} from "../../data";

//console.log('itemList',itemList);

const App = () => {

    const [state, setState] = useState(category);
    const { id,title,img } = state;

     console.log('state:',state);
    // console.log('title:' , state[0].title);
    // console.log('img : ' + state[0].img);

    const search = searchValue => {
        console.log(`${searchValue} searching...`);
        const el = document.getElementById(`${searchValue}`);
        if (el) {
            console.log('있음');
            setState(el);
           
        } else {
            console.log('없음');
            return(
                <p>
                    해당상품이 없습니다
                </p>
            )
        }
    }

    return (
        <>
        <h1>온라인 쇼핑몰</h1>
        
        <Search search ={search}/>

        <Routes />
       
        </>
    );
}
        
export default App;