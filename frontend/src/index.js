import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import HomePage from './LandingPage/Home/HomePage';
import AboutPage from './LandingPage/About/AboutPage';
import PricingPage from './LandingPage/Pricing/PricingPage';
import ProductPage from './LandingPage/Products/ProductPage';
import Signup from './LandingPage/Signup/Signup';
import SupportPage from './LandingPage/Support/SupportPage';
import Navbar from './LandingPage/Navbar';
import Fotter from './LandingPage/Fotter';
import NotFound from './LandingPage/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Fotter/>
    </BrowserRouter>


);


