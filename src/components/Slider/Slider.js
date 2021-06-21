import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'
import img7 from '../../img/7.jpg'


const Slider = () => {
    return (
         <Carousel autoPlay="true" infiniteLoop="true" className="">
                <div className="slider-container">
                    <img src={img1} />
                    
                </div>
                <div className="slider-container">
                    <img src={img2} />
                    
                </div>
                <div className="slider-container">
                    <img src={img3} />
                
                </div>
                <div className="slider-container">
                    <img src={img4} />
                    
                </div>
                <div className="slider-container">
                    <img src={img5} />
                   
                </div>
                <div className="slider-container">
                    <img src={img6} />
               
                </div>
                <div className="slider-container">
                    <img src={img7} />
                  
                </div>
            </Carousel>
    )
}

export default Slider
