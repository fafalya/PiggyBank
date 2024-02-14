import React, { Fragment,useEffect, useState } from 'react';
//import { UrlAims, UrlUsers, UrlUploadImages } from '../urls/urlsList';
import axios from 'axios'

const AimCards =() => {
    useEffect(()=>{
        (async ()=> await Load())();
        // const Load = async () => {
        //     const result = await axios.get(UrlAims);
        //     setAimList(result.data);
        // }
        // Load();
    },[])

    async function Load(){
        // const resultLoadingAims = await axios.get(UrlAims);
        // setAimList(resultLoadingAims.data);
        // console.log(resultLoadingAims.data);

        // const resultLoadingUsers = await axios.get(UrlUsers); 
        // setUserList(resultLoadingUsers.data);
        // console.log(resultLoadingUsers.data);
    }

    return (
        <Fragment>
            <div className="also-like">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Я хочу...</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <a href="event-details.html"><img src="assets/images/like-01.jpg" alt=""/></a>
                                    <div className="icons">
                                        <ul>
                                            <li><a href="event-details.html"><i className="fa fa-arrow-right"></i></a></li>
                                            <li><a href="ticket-details.html"><i className="fa fa-ticket"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <span>Sept 10 to 14, 2021</span>
                                    <a href="event-details.html"><h4>Wonder Land Music and Arts Festival</h4></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <a href="event-details.html"><img src="assets/images/like-02.jpg" alt=""/></a>
                                    <div className="icons">
                                        <ul>
                                            <li><a href="event-details.html"><i className="fa fa-arrow-right"></i></a></li>
                                            <li><a href="ticket-details.html"><i className="fa fa-ticket"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <span>Oct 11 to 16, 2021</span>
                                    <a href="event-details.html"><h4>Big Water Splashing Festival</h4></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <a href="event-details.html"><img src="assets/images/like-03.jpg" alt=""/></a>
                                    <div className="icons">
                                        <ul>
                                            <li><a href="event-details.html"><i className="fa fa-arrow-right"></i></a></li>
                                            <li><a href="ticket-details.html"><i className="fa fa-ticket"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <span>Nov 10 to 18, 2021</span>
                                    <a href="event-details.html"><h4>Tiger Dance Hip Hop Festival</h4></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AimCards;