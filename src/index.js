import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home/home'
import Cart from './components/cart'
import About from './components/about/about'
import LogIn from './components/registration/login'
import SignUp from './components/registration/signup'
import Search from './components/search/search';
import ProductCard from './components/ProductList/productcard';
import ErrorPage from './components/errorpage' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/cart' Component={Cart}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/login' Component={LogIn}/>
        <Route exact path='/signup' Component={SignUp}/>
        <Route exact path='/search' Component={Search}/>
        <Route exact path='/products' Component={ProductCard}/>
        <Route path='*' Component={ErrorPage}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
