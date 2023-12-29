import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import crop_banner from './Components/Assets/crop-banner.png'
import veg_banner from './Components/Assets/banners.jpg'
import gen_banner from './Components/Assets/banner2.jpg'
import Login from './Pages/Login';
/**
 * Renders the main application component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div>
      <BrowserRouter>


        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/fruits" element={<ShopCategory banner={gen_banner} category="fruit" />} />
          <Route path="/crops" element={<ShopCategory banner={crop_banner} category="crop" />} />
          <Route path="/vegetables" element={<ShopCategory banner={veg_banner} category="vegetable" />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div >
  );
}

export default App;
