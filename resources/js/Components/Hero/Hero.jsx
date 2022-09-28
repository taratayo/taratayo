import React from 'react';
import image from '../../../../public/assets/images/eibner-saliba-3T9dDY0WqDI-unsplash.jpg';
var bg = {
    height: "700px",
    backgroundImage: `url(${image})`
}

function Hero(props) {
    return (
        <>
            <div className="hero-wrap"
                 style={bg}
                >
            </div>
        </>
    );
}

export default Hero;
