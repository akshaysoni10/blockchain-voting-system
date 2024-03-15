import React from 'react';
import logo from "../../../assets/logo.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div><img src={logo} alt="logo" className='logo-img' /></div>
            <div className='nav-heading'>
                <div className='nav-items'>
                    <a href='/candidate'>Candidate</a>
                    <a href='/voter'>Voter</a>
                </div>
            </div>
            <div>
                <button className='logout-btn'><FaArrowRightFromBracket className='arrow-icon' />Logout</button>
            </div>
        </div>
    )
}

export default Navbar
