import React from "react";
import { Link } from "react-router-dom";

import Slider from 'nuka-carousel';

function Home() {

    return (
        <>
            <Slider style={{ width: '100%', height: '450px', margin: 'auto', textAlign: 'center', background: 'white' }}>
                <div>
                    <img src='/../img/cosmetic.png'/>
                </div>
                <div>
                    <img src='/../img/kickboard.jpg'/>
                </div>
                <div>
                    <img src='/../img/tea.jpg'/>
                </div>
                <div>
                    <img src='/../img/cosmetic.png'/>
                </div>
            </Slider>

        </>
    );
}


export default Home;
