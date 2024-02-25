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
            <div className="shows-events-tabs">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row" id="tabs">
                        <div className="col-lg-12">
                            <div className="heading-tabs">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <ul>
                                          <li><a href='#tabs-1'>Upcoming</a></li>
                                          <li><a href='#tabs-2'>Past</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                          <div className="main-dark-button">
                                              <a href="ticket-details.html">Purchase Tickets</a>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <section className='tabs-content'>
                                <article id='tabs-1'>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading"><h2>Upcoming</h2></div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="sidebar">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="heading-sidebar">
                                                            <h4>Sort The Upcoming Shows & Events By:</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="month">
                                                            <h6>Month</h6>
                                                            <ul>
                                                                <li><a href="#">July</a></li>
                                                                <li><a href="#">August</a></li>
                                                                <li><a href="#">September</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="category">
                                                            <h6>Category</h6>
                                                            <ul>
                                                                <li><a href="#">Pop Music</a></li>
                                                                <li><a href="#">Rock Music</a></li>
                                                                <li><a href="#">Hip Hop Music</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="venues">
                                                            <h6>Venues</h6>
                                                            <ul>
                                                                <li><a href="#">Radio City Musical Hall</a></li>
                                                                <li><a href="#">Madison Square Garden</a></li>
                                                                <li><a href="#">Royce Hall</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Tiger Land Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-01.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>Sep 24 Friday<br/>11:20 AM - 10:20 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>540 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Super Rock Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-02.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>Oct 22 Saturday<br/>10:00 AM - 09:00 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>480 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Rocky Hill Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-03.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>Nov 12 Friday<br/>11:00 AM - 11:00 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>908Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>920 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Hip Hop Special</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-04.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>Nov 18 Sunday<br/>08:00 AM - 09:00 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>785 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="pagination">
                                                        <ul>
                                                            <li><a href="#">Prev</a></li>
                                                            <li><a href="#">1</a></li>
                                                            <li className="active"><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#">Next</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>                            
                                <article id='tabs-2'>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading"><h2>Upcoming</h2></div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="sidebar">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="heading-sidebar">
                                                            <h4>Sort The Upcoming Shows & Events By:</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="month">
                                                            <h6>Month</h6>
                                                            <ul>
                                                                <li><a href="#">July</a></li>
                                                                <li><a href="#">August</a></li>
                                                                <li><a href="#">September</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="category">
                                                            <h6>Category</h6>
                                                            <ul>
                                                                <li><a href="#">Pop Music</a></li>
                                                                <li><a href="#">Rock Music</a></li>
                                                                <li><a href="#">Hip Hop Music</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="venues">
                                                            <h6>Venues</h6>
                                                            <ul>
                                                                <li><a href="#">Radio City Musical Hall</a></li>
                                                                <li><a href="#">Madison Square Garden</a></li>
                                                                <li><a href="#">Royce Hall</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Water Splash Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-04.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>April 24 Friday<br/>12:00 AM - 12:00 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>528 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Sunny Hill Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-03.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>May 31 Friday<br/>10:00 AM - 11:00 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>240 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>New Rock Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-02.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>June 12 Friday<br/>09:00 AM - 09:00 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>360 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="left-content">
                                                                    <h4>Monkey Dance Festival</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur do adipiscing eliterirt sed eiusmod alori...</p>
                                                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    <img src="assets/images/event-page-01.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <h6>July 14 Friday<br/>08:30 AM - 09:30 PM</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-map-marker"></i>
                                                                            <span>Copacabana Beach, Rio de Janeiro</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>450 Total Guests Attending</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="pagination">
                                                        <ul>
                                                            <li><a href="#">Prev</a></li>
                                                            <li><a href="#">1</a></li>
                                                            <li className="active"><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#">Next</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>    
                            </section>
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