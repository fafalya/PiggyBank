import React from 'react';
import { Fragment } from "react";


const Home =() =>{
    return (
        
        <Fragment>
            <div className="main-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-content">
                        <h5>Приложение </h5>
                        <h2>КОПИЛКА</h2>
                        <div className="main-white-button">
                            <a href="/Authorization">Войти</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about-upcoming-shows">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Что такое PiggyBank?</h2>
                            <p><p>PiggyBank - это приложение-копилка. Здесь вы можете 
                            <a href="/Registration"> зарегистрироваться </a> и выбрать на что собираетесь копить.
                            Приложение поможет выбрать схему накопления и создать мотивацию для достижения своей цели. 
                            </p></p>
                            <h4>Рекомендуемые схемы накопления:</h4>
                            <ul>
                                <li>* Магия маленьких чисел</li>
                                <li>* Округление ежедневного остатка на счете</li>
                                <li>* Фиксированная сумма каждый день</li>
                            </ul>
                            <h4>Магия маленьких чисел</h4>
                            <p>Способ основан на арифметической прогрессии: вы откладываете каждый день больше, чем в предыдущий на фиксированное число.
                            Например, копилка на год. Начинаете с одного рубля и каждый день откладываете на рубль больше. Последний, максимальный взнос — 365 рублей.  
                            </p>
                            <h4>Округление ежедневного остатка на счете</h4>
                            <p>В век электронных технологий шансы на то, что ваши карманы набиты наличными, невелики. 
                            Но вы можете ежедневно переводить в «копилку» своеобразную мелочь со счёта — так, чтобы округлить остаток.
                            Скажем, в конце дня у вас на карте осталось 5 247 рублей. Вы можете отложить 47 рублей, чтобы осталось 5 200, или 247 рублей, чтобы осталось ровно 5 тысяч.
                            </p>
                            <h4>Фиксированная сумма каждый день</h4>
                            <p>Если вы чётко знаете, на что копите, и хотите купить это в конкретную дату, сработает планирование. 
                            Самое простое — разделить всю сумму на оставшееся количество месяцев. Полученная цифра покажет, сколько вам надо откладывать каждые 30 дней.
                            Однако, при этом у вас есть контрольное число, ниже которого нельзя опускаться.
                            </p>
                            <div className="text-button">
                                <a href="/">На главную <i className="fa fa-arrow-right"></i></a>
                            </div>
                            <div>
                                <p></p>
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