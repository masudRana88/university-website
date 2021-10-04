import React from 'react';
import img from '../../images/logo.png'
import NavBar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header-info d-flex border-bottom border-primary">
                <div className="social-icon d-flex justify-content-center align-items-center h-100">
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="fab fa-google-plus-g"></i>
                </div>
                <div className="header-container w-100 d-flex">
                    <div className="hader-contact h-100 d-flex justify-content-around">
                        <p className="d-inline ">needhelp@gmail.com</p>
                        <p className="d-inline">666 7475 25252</p>
                    </div>
                    <div className="header-user d-flex justify-content-end  h-100 align-items-center">
                        <span><i class="bi bi-person"></i> Login</span>
                        <span className="me-3"><i class="bi bi-box-arrow-in-right"></i> Register</span>
                    </div>
                </div>
            </div>
            <NavBar/>
        </div>
    );
};

export default Header;