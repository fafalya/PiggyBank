import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div className="page-heading-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>PiggyBank</h2>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="about-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-image">
                                <img src="assets/images/about-image.jpg" alt="party time"/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-content">
                                <div className="about-map-image">
                                    <img src="assets/images/about-map-image.jpg" alt="party location"/>
                                </div>
                                <div className="down-content">
                                    <h4>Мотивация для накопления денег</h4>
                                    <ul>
                                        <li>Выбери на что хочешь копить</li>
                                        <li>Выбери как хочешь копить</li>
                                    </ul>
                                    <div className="main-dark-button">
                                        <a href="ticket-details.html">Выбрать</a>
                                    </div>
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
                            <a href="/Users"> авторизоваться </a> и <a href="/Aims"> выбрать </a> на что собираетесь копить.
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
        </Fragment>
    );
};
export default About;