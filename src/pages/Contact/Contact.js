import React from 'react';
import img from '../../images/contactUs-min.jpg'
import './Countact.css'
const Contact = () => {
    return (
        <div className="countact-area">
            <h2 className="section-title text-center">Get in Touch</h2>
            <div className="d-flex">
                <div className="w-50 ms-3">
                    <img className="img-fluid rounded" src={img} alt="" />
                </div>
                <div className="w-50 ms-3 me-3">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter your Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter your Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"></label>
                        <textarea placeholder="Enter your Message" className="form-control" rows="3"></textarea>
                    </div>
                    <button className="get-started-button">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;