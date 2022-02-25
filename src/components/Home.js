import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
       
        <div className='row text-center mt-1'>
            <Slider {...settings}>
                <div>
                    <img src='slide1.jpg' style={{height: "500px", width: "100vw"}}/>
                    <div className="slider-text">
                        <h1>Lorem ipsum</h1>
                    </div>
                </div>
                <div>
                    <img src='slide2.jpg' style={{height: "500px", width: "100vw"}}/>
                    <div className="slider-text">
                        <h1>Lorem ipsum</h1>
                    </div>
                </div>
            </Slider>
            
            <h1>Welcome to my Blog Site</h1>
        </div>        
    )
}

export default Home;