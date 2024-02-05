import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from "react-redux";


const Header = () => {

    let [btnName, setbtnName] = useState("Login");
    let onlineStatus = useOnlineStatus();

    const [loggedInUser, setloggedInUser] = useState()

    useEffect(() => {
        
        const data = {
            name: "😎 Yashpreet"
        }

        setloggedInUser(data.name);

    }, [])

    

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between px-10">
            <Link to="/">
                <img className="w-24" src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg" alt="Foody App Logo"/>
            </Link>
            <div className='flex items-center'>
                <ul className='flex items-center gap-5'>
                    <li>You're {onlineStatus ? "Online 🟢" : "Offline 🔴"} </li>
                    <li className="hover:text-yellow" ><Link to="/">Home</Link></li>
                    <li className="hover:text-yellow" ><Link to="/about">About Us</Link></li>
                    <li className="hover:text-yellow" ><Link to="/Contact">Contact Us</Link></li>
                    <li className="hover:text-yellow" ><Link to="/grocery">Grocery Store</Link></li>
                    <div className='flex gap-1'>
                        <li className='flex flex-wrap'>
                            <Link to="/cart">
                                <img src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png' className='w-6'></img> 
                            </Link>     
                        </li>
                        <li>{cartItems.length}</li>
                    </div>
                    <button className='border border-yellow rounded-lg px-2 hover:bg-yellow' onClick={() => {btnName === "Login" ? setbtnName(loggedInUser) : setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div> 
        </div>
    );
}

export default Header 