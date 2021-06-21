import React from 'react'
import MyNavbar from '../MyNavbar/MyNavbar'
import Slider from '../Slider/Slider'
import About from '../About/About'
import Office from '../Office/Office'
import Reviews from '../Reviews/Reviews'
import Footer from '../Footer/Footer'

const Home = () => {
    
    return (
        
        <div>
            <MyNavbar></MyNavbar>
            <Slider></Slider>
            <About></About>
            <Office></Office>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    )
}

export default Home
