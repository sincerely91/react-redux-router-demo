import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Services from './HomeSections/Services';

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (   
        <div className='container-fluid'>
            <div className='row text-center mt-1'>
                <Slider {...settings}>
                    <div>
                        <img src='slide1.jpg' alt="slider1" style={{height: "550px", width: "100vw"}}/>
                        <div className="slider-text">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis.</h1>
                        </div>
                    </div>
                    <div>
                        <img src='slide2.jpg' alt="slider1" style={{height: "550px", width: "100vw"}}/>
                        <div className="slider-text">
                            <h1>Donec at volutpat ex, vitae bibendum diam. Fusce maximus fermentum.</h1>
                        </div>
                    </div>
                </Slider>
            </div>
            <Services />
        </div>        
    )
}

export default Home;