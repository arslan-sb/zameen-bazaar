import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu, setMenu] = React.useState("shop");
  const { getTotalCartItems } = React.useContext(ShopContext);

  return (
    <div className='navbar'>
      {/* Navbar content */}
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>AGROCART</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("fruits") }}><Link to="/fruits" style={{ textDecoration: 'none', color: 'black' }}>Fruits</Link>{menu === "fruits" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("crops") }}><Link to="crops" style={{ textDecoration: 'none', color: 'black' }}>Crops</Link>{menu === "crops" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("vegetables") }}><Link to="vegetables" style={{ textDecoration: 'none', color: 'black' }}>Vegetables</Link>{menu === "vegetables" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/signup"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
