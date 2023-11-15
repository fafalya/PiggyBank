import React from 'react';
import { Fragment } from "react";

function Home() {
    return (
        
        <Fragment>
            <div className="main-banner">
        <div className="counter-content">
            <ul>
                <li>Days<span id="days"></span></li>
                <li>Hours<span id="hours"></span></li>
                <li>Minutes<span id="minutes"></span></li>
                <li>Seconds<span id="seconds"></span></li>
            </ul>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-content">
                        <div className="next-show">
                            <i className="fa fa-arrow-up"></i>
                            <span></span>
                        </div>
                        <h5>Приложение </h5>
                        <h2>КОПИЛКА</h2>
                        <div className="main-white-button">
                            <a href="/aims">Начать копить</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- jQuery --> */}
    <script src="assets/js/jquery-2.1.0.min.js"></script>

    {/* <!-- Bootstrap --> */}
    <script src="assets/js/popper.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/scrollreveal.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/imgfix.min.js"></script> 
    <script src="assets/js/mixitup.js"></script> 
    <script src="assets/js/accordions.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
     <script src="assets/js/custom.js"/> 
        </Fragment>
    );
};
export default Home;