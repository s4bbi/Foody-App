import logo from '../../images/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    let [btnName, setbtnName] = useState("Login");

    return (
        <div className="header">
            <Link to="/"><div className="logo-container">
                <img className="logo" src={logo} alt="Foody App Logo"/>
            </div></Link>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <button className='log btn' onClick={() => {btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div> 
        </div>
    );
}

export default Header 