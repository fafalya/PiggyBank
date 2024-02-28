import React from 'react';
import { Fragment } from "react";


function Header() {
    return (

            <Fragment>

    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">Piggy<em>Bank</em></a>
                        <ul className="nav">
                            <li><a href="/" >Главная</a></li>
                            <li><a href="/aims">На что копим</a></li>                         
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
        </Fragment>
        
    );
};

export default Header;