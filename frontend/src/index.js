import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './/Page/Home/Home';
import ProductDetails from './Page/Product_detail/ProductDetails';
import Page404 from './Page/404/Page404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Page/signIn/SignUp';
import Registration from './Page/signIn/Registration/Registration';
import Products from './Page/Product_all/Products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        <Route path='*' element={<Page404/>}/>
        <Route path='/sign_in' element={<Registration/>}/>
        <Route path='/sign_up' element={<SignUp />}/>
        <Route exact path="/products" element={<Products />} />
    </Routes>
    </BrowserRouter>
);
    
