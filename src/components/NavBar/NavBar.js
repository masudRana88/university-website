import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link my-nav-link" aria-current="page" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link my-nav-link" to="courses">Cousress</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link my-nav-link" to="instructors">Instructors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link my-nav-link" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link my-nav-link" to="contsct">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Link to="/home">
                                <button className="btn btn-reguler" type="submit">Search</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;