import React from "react";
import { Link } from "react-router-dom";

import Slider from 'nuka-carousel';

function Home() {

    return (
        <>
            <Slider style={{ width: '1500px', height: '450px', margin: 'auto', textAlign: 'center', background: 'white' }}>
                <div>
                    <img src='/../img/1.jpg'/>
                </div>
                <div>
                    <img src='/../img/2.jpg'/>
                </div>
                <div>
                    <img src='/../img/3.jpg'/>
                </div>
                <div>
                    <img src='/../img/4.jpg'/>
                </div>
            </Slider>

        </>
    );
}


export default Home;
