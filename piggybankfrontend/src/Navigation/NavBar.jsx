import { Navbar } from "react-bootstrap";
import React from 'react';
// import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        
        <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a href="index.html" class="logo">Art<em>Xibition</em></a>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul class="nav">
                            <li><a href="index.html" class="active">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="rent-venue.html">Rent Venue</a></li>
                            <li><a href="shows-events.html">Shows & Events</a></li> 
                            <li><a href="tickets.html">Tickets</a></li> 
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/*<!-- ***** Menu End ***** -->*/}
                    </nav>
                </div>
            </div>
        </div>
    </header>

        // <nav className="nav nav-underline justify-content-between mb-2">
        //     <NavLink className='nav-item nav-link link-body-emphasis' to="/">
        //         Главная
        //     </NavLink>
        //     <NavLink className='nav-item nav-link link-body-emphasis' to="/books">
        //         Каталог книг
        //     </NavLink>
        //     <NavLink className='nav-item nav-link link-body-emphasis' to="/shops">
        //         Магазины
        //     </NavLink>
        //     <NavLink className='nav-item nav-link link-body-emphasis' to="/cart">
        //         Корзина
        //     </NavLink>
        //     <NavLink className='nav-item nav-link link-body-emphasis' to="/auth">
        //         Авторизация
        //     </NavLink>
        // </nav>
    );
};

export default NavBar;