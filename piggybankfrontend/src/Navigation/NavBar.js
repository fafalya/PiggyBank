//import { Navbar } from "react-bootstrap";
import React from 'react';
import { Fragment } from "react";
//import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        // <Navbar>
            <Fragment>
       
        
    {/* <!-- ***** Header Area Start ***** --> */}
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a href="index.html" className="logo">Piggy<em>Bank</em></a>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul className="nav">
                            <li><a href="/" >Главная</a></li>
                            <li><a href="/about">О приложении</a></li>
                            <li><a href="/aims">На что копим</a></li>
                            <li><a href="/users">Авторизация</a></li> 
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
        </Fragment>
        
    );
};

export default NavBar;