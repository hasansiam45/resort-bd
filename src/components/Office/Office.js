import React from 'react'

const Office = () => {
    return (
        <div className="text-center bg-secondary text-white p-5">
            <h2 className="mb-5">Our Office</h2>
            <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944846413!2d90.36710721941003!3d23.74705004446573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1623652495535!5m2!1sen!2sbd"  loading="lazy" style={{height: '300px', width: '60%'}}></iframe>
            </div>
        </div>
    )
}

export default Office
