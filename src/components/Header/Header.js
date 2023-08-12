
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <div className="container">
           <nav>
           <a href="/home"><img src={logo} alt="logo" /></a>
           <div className='menu'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="inventory">Manage Inventory</a>
                <a href="login">Login</a>
           </div>
           </nav>
           </div>
        </div>
    );
};

export default Header;