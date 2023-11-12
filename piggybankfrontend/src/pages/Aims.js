import React, { Fragment } from 'react';

function Aims() {
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
                                    <span>Next Show</span>
                                </div>
                                <h6>Opening on Thursday, March 31st</h6>
                                <h2>The Sunny Hill Festival 2022</h2>
                                <div className="main-white-button">
                                    <a href="ticket-details.html">Purchase Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </Fragment>
    );
};
export default Aims;