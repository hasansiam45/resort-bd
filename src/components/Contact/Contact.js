import React from 'react'
import MyNavbar from '../MyNavbar/MyNavbar'
import Footer from '../Footer/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_2g5a0ch', 'template_01n3d3n', e.target, 'user_8Nd22F9PPWNpJZnAbyGbW')
            .then((result) => {
            }, (error) => {
            });
    }
    return (
        <div className="text-center bg-dark text-white">
            <MyNavbar></MyNavbar>
            <div style={{ height: '80vh', overflowY: 'auto' }}>
                <h3 className="p-3">Contact With Us</h3>
                <form onSubmit={sendEmail}>
                    <input className="p-2 rounded w-50" type="text" name="name" placeholder="Your Name" /> <br /> <br />
                    <input className="p-2 rounded w-50" type="email" name="email" placeholder="Your Email" /> <br /> <br />
                    <input className="p-2 rounded w-50" type="text" name="subject" placeholder="subject" /> <br /> <br />
                    <textarea className="p-2 mb-4 rounded w-50" name="message" id="message" cols="40" rows="7" placeholder="Your Message"></textarea> <br />
                    <input className="btn btn-primary" type="submit" value="SEND" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact
