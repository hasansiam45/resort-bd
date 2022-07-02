import React from 'react'
import myImg from '../../img/9.jpg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div style={{height: '80vh', overflowY: 'auto', overflowX: 'hidden'}}>
             <h2 className="text-center m-5 text-success">About Us</h2>
            <div className="d-flex align-items-center">
           
            <div className="row ">
                
                    <div className="col-md-6 d-flex align-items-center justify-content-center mb-3">
                        <div>
                            <Fade left>
                            <img src={myImg} alt="" style={{ height: '300px', width: '400px', margin: '10px' }} />
                            <h3 className="text-center text-success">Resort-BD</h3>
                                <p className="text-center text-danger">Your Travel solution</p>
                            </Fade>
                        </div>
                </div>
                
                    <div className="col-md-6 d-flex justify-content-center">
                        <Fade right>
                            <p className="text-justify px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique dolorem, vero explicabo in ea sit fugiat unde eius fuga suscipit odit obcaecati eveniet maxime nostrum dolore quaerat. Expedita dolore, aliquam explicabo eveniet harum nisi, consectetur vel provident exercitationem saepe ratione distinctio dolores maxime perferendis quas quisquam veritatis, mollitia perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique dolorem, vero explicabo in ea sit fugiat unde eius fuga suscipit odit obcaecati eveniet maxime nostrum dolore quaerat.suscipit odit obcaecati eveniet maxime nostrum dolore quaerat. Expedita dolore, aliquam explicabo eveniet harum nisi, consectetur vel provident exercitationem saepe ratione distinctio dolores maxime perferendis quas quisquam veritatis, mollitia perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique dolorem, vero explicabo in ea sit fugiat unde eius fuga suscipit odit obcaecati eveniet maxime nostrum dolore quaerat..suscipit odit obcaecati eveniet maxime nostrum dolore quaerat. Expedita dolore, aliquam explicabo eveniet harum nisi, consectetur vel provident exercitationem saepe ratione distinctio dolores maxime perferendis quas quisquam veritatis, mollitia perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique dolorem, vero explicabo in ea sit fugiat unde eius fuga suscipit odit obcaecati eveniet maxime nostrum dolore quaerat.adipisicing elit. Sapiente similique dolorem, vero explicabo in ea sit fugiat unde eius fuga suscipit odit obcaecati eveniet maxime nostrum dolore quaerat.</p>
                        </Fade>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
