import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Products';
import Contact from './components/Contact';
import Career from './components/Career';
import Blog from './components/Blog';
import Services from './components/Services';
import Navbar from './components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<Navbar/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
);


