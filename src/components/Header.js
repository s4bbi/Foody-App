import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Foody App Logo"/>
            </div>
            <div className="navItems">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Services</a></li>
                    <li><a href="#Cart">Contact Us</a></li>
                </ul>
            </div> 
        </div>
    );
}

export default Header 