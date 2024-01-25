import logo from '../../images/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

    let [btnName, setbtnName] = useState("Login");
    let onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between px-10">
            <Link to="/">
                <img className="w-20" src={logo} alt="Foody App Logo"/>
            </Link>
            <div className='flex items-center'>
                <ul className='flex gap-5'>
                    <li>You're {onlineStatus ? "Online 🟢" : "Offline 🔴"} </li>
                    <li className="hover:text-yellow" ><Link to="/">Home</Link></li>
                    <li className="hover:text-yellow" ><Link to="/about">About Us</Link></li>
                    <li className="hover:text-yellow" ><Link to="/Contact">Contact Us</Link></li>
                    <li className="hover:text-yellow" ><Link to="/grocery">Grocery Store</Link></li>
                    <li className="hover:text-yellow" ><Link to="/cart">Cart</Link></li>
                    <button className='border rounded-lg px-2 hover:bg-yellow' onClick={() => {btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div> 
        </div>
    );
}

export default Header 