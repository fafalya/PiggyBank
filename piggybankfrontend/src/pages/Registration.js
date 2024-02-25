import React, { Fragment,useEffect, useState } from 'react';
import { UrlUsers } from '../urls/urlsList';
import axios from 'axios';

const Authorization =() =>{
    const [showError, setShowError] = useState(false);
    const [user, setUser] = useState({
        name: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const Register = (event) => {
        event.preventDefault();

        try {
            if (user.name === "" || user.password === "") {
                throw new Error("Введите имя пользователя и пароль");
            }


            axios.post(UrlUsers, user)
                .then(res => {
                    window.location.replace('http://localhost:3000/Authorization')
                })
                .catch(function (error) {
                    if (error.response) {
                        setShowError(true);
                        setErrorMessage(error.response.data.detail);
                    }
                });

        } catch (error) {
            setShowError(true);
            setErrorMessage(error.message);
        }
    }
    
    return (
        
        <Fragment>
            <div className="page-heading-shows-events">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Регистрация</h2>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

    <div className="rent-venue-application">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="heading-text">
                        <h4>Введите данные</h4>
                    </div>
                    <div className="contact-form">
                        <form id="contact" action="" method="post">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Логин" required="" value={user.name} onChange={event => setUser({ ...user, name: event.target.value })} />
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="password" type="text" id="password"  placeholder="Пароль" required="" value={user.password} onChange={event => setUser({ ...user, password: event.target.value })}/>
                              </fieldset>
                            </div>
                       
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-dark-button" onClick={ Register }>Зарегистрироваться</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
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
export default Authorization;