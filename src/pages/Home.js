import React from "react";

import Slider from 'nuka-carousel';

function Home() {

    return (
        <>
            <Slider style={{ width: '100%', margin: 'auto', textAlign: 'center', background: 'white' }}>
                <div>
                    <img src='/../img/1.jpg' />
                </div>
                <div>
                    <img src='/../img/2.jpg' />
                </div>
                <div>
                    <img src='/../img/3.jpg' />
                </div>
                <div>
                    <img src='/../img/4.jpg' />
                </div>
            </Slider>

        </>
    );
}


export default Home;
