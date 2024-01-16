import logo from '../../images/logo.png'
import { useState } from 'react';

const Header = () => {

    let [btnName, setbtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Foody App Logo"/>
            </div>
            <div className="navItems">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                    <button className='log btn' onClick={() => {btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div> 
        </div>
    );
}

export default Header 