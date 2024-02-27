import React, { Fragment,useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { UrlBase, UrlAims, UrlUsers, UrlUploadImages, UrlAimsByUserId } from '../urls/urlsList';
import ImagesUpload from '../components/ImagesUpload/ImagesUpload';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Image } from 'react-bootstrap';




const Aims =()=> {
    const [aim, setAim] = useState({
        title: '',
        price: '',
        date: '',
        wayOfSaving: '',
        userId: '',
        imagesId: []
    })
    const cookies = new Cookies();
    const config = {
        headers: { Authorization: `Bearer ${cookies.get('access_token')}` }
    };
    

    const[aimByUser, setAimByUser]=useState([])
    const [dataResponseImage, setDataResponseImage] = useState([]);
    var imagesArray;

    const[tempId, setTempId]=useState(null);
    const handleDataImages = (data) => {
        setDataResponseImage(data);
    }

    const WayOptions = [
        { value: '1', label: 'Магия маленьких чисел' },
        { value: '2', label: 'Фиксированная сумма каждый день' }
    ]
    const [selectedOption, setSelectedOption] = useState(null);   
    const WaySelect = () => (
        <Select options={WayOptions} placeholder='Выбери спсоб накопления' defaultValue={selectedOption}
        onChange={setSelectedOption}/>
    )

    const handleAddTitle =(event) => {
        event.preventDefault();
        setAim({...aim, title: event.target.value})
    }

    const handleAddPrice =(event) => {
        event.preventDefault();
        setAim({...aim, price: event.target.value})
    }
    const [selectDate, setSelectedDate] = useState(null)
    const ChooseDate =()=> (
        <DatePicker selected={selectDate} onChange={date => setSelectedDate(date)} dateFormat={"dd/MM/yyyy"} minDate={new Date()}/>
    )

    useEffect(()=>{
        setTempId(cookies.get('userId'));
        if(tempId!==null){
            (async ()=> await Load())();
        }
       
    },[])

    async function Load(){
        const resultLoadingAimsByUserId = await axios.get(UrlAimsByUserId + tempId, config);
        setAimByUser(resultLoadingAimsByUserId.data);
        console.log(resultLoadingAimsByUserId.data);
    }

    

    async function AddNewAim () {
        try {
            var tempAim = {
                title: aim.title,
                price: aim.price,
                date: selectDate,
                wayOfSaving: parseInt(selectedOption.value),
                userId: tempId,
                imagesId: aim.imagesId
            }

            console.log(tempAim)
            console.log(tempId)
            await axios.post(UrlAims, tempAim, config );
            alert("Добавили новую цель");
            Load();
        } catch(error){
            alert(error);
        }
    }

    async function postImages()  {
        const formData = new FormData();
        for (let i = 0; i < dataResponseImage.length; i++) {
            formData.append('images', dataResponseImage[i].file);
        }
        try {
            await axios.post(UrlUploadImages, formData, config)
                .then((res) => {                 
                    imagesArray = res.data;
                });
            console.log('Изображение добавлено');
        }
        catch (e) {
            console.log('Ошибка добавления изображений');
        }
    }

    async function CheckAim() {
        if (aim.title != null && aim.price !=null && aim.date !=null && aim.wayOfSaving !=null && aim.userId !=null){
            await AddNewAim();

        }

    }
    async function Add(){
        await postImages();
        setAim({... aim , imagesId:imagesArray});
        await CheckAim();

    }

    async function Delete(id) {
        await axios.delete(UrlAimsByUserId + id, config);
        Load();
    }

    function ShowDate(aimDate){
        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        let countDown = new Date(aimDate).getTime();
        let now = new Date().getTime(),
          distance = countDown - now;
        return (
            Math.floor(distance / (day))
        )
    }
    function SinceStart(aimDate, aimStart){
        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        let countDown = new Date(aimDate).getTime();
        let now = new Date(aimStart).getTime(),
          distance = countDown - now;
        return (
            Math.floor(distance / (day))
        )
    }

    function FirstWay(aimDate, aimPrice, aimStart){
        let days = SinceStart(aimDate, aimStart);
        let daysLeft = ShowDate(aimDate);
        let dayNow = days-daysLeft;
        if (days=daysLeft) {
            dayNow=1;
        }
        let progression = Math.floor((2*aimPrice-2*days)/(days*(days-1)));
        return (
            1+progression*(dayNow-1)
        )
    }
    function SecondWay(aimDate, aimPrice, aimStart){
        let days = SinceStart(aimDate, aimStart);
        return (
            Math.floor(aimPrice/days)
        )
    }


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
        

            {/* choosing datas for aim */}
            <div className="also-like">
                <div className="container" >
                    <div className="row" >
                        <div className="col-lg-10" >
                            <h2 >Я хочу...</h2>
                        </div>
                        <div className="col-lg-10" style={{ margin : 'auto' }}>
                            <div className="like-item">
                                <div className="thumb">
                                    <img src="assets/images/mini_banner_bg.jpg" alt="" style={{  height: '200px' }}/>
                                </div>
                                <div className="down-content">
                                    <span>На что будем копить?</span><p style={{ margin : '10px' }}></p>
                                    <input type="text" class="form-control" style={{  width: '860px' }}
                                    value={aim.title} placeholder="Хотелка" 
                                    onChange={handleAddTitle}/><p style={{ margin : '10px' }}></p>
                                    <span>Сколько нужно накопить?</span><p style={{ margin : '10px' }}></p>
                                    <input type="text" class="form-control" style={{  width: '860px' }}
                                    value={aim.price}  placeholder="Сумма" 
                                    onChange={handleAddPrice}/><p style={{ margin : '10px' }}></p>
                                    <span>К какой дате нужно накопить?</span><p style={{ margin : '10px' }}></p>
                                    <ChooseDate  /><p style={{ margin : '10px' }}></p>
                                    <span>Добавь картинку цели для мотивации</span><p style={{ margin : '10px' }}></p>
                                    <ImagesUpload arrayImages={ handleDataImages} /><p style={{ margin : '10px' }}></p>
                                    <span>Каким способ будем копить?</span><p style={{ margin : '10px' }}></p>
                                    <WaySelect  style={{  width: '860px' }}/><p style={{ margin : '10px' }}></p>
                                    <button type="submit" id="form-submit" class="main-dark-button" onClick={Add} style={{ marginBlock : '10px'}} >Добавить цель</button><p style={{ margin : '10px' }}></p>
                                </div>

                            </div>
                        </div>                                              
                    </div>
                </div>
            </div>
<div>

</div>           
            <div className="shows-events-tabs">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row" id="tabs">

                        <div className="col-lg-12">
                            <section className='tabs-content'>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading"><h2>Мои цели</h2></div>
                                        </div>
                                        {aimByUser.map((aim) => {
                                             return (                                                     
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">
                                                        {console.log(aim)}
                                                            <div className="col-lg-4">
                                                                <div className="thumb">
                                                                    {aim.images.map((i)=> 
                                                                        <div>
                                                                        <Image
                                                                        style={{ height: 250, width: 250, marginTop: '70px' }}
                                                                        src={UrlBase + i.imagePath } />
                                                                        {console.log(UrlBase,i.imagePath)}
                                                                        </div>
                                                                    )
                                                                    }                                                           
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="right-content">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-clock-o"></i>
                                                                            <span>Осталось копить дней:&nbsp;{ShowDate(aim.date)}</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-arrow-right"></i>
                                                                            <span>Я коплю на:&nbsp;</span><h6>{aim.title}</h6>
                                                                        </li>
                                                                        {(aim.wayOfSaving == 1)?  
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>Сегодня нужно положить в копилку:&nbsp;{FirstWay(aim.date, aim.price, aim.start)}</span>
                                                                        </li>
                                                                        :
                                                                        <li>
                                                                        <i className="fa fa-users"></i>
                                                                        <span>Сегодня нужно положить в копилку:&nbsp;{SecondWay(aim.date, aim.price, aim.start)}</span>
                                                                        </li>  
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                        <button type="submit" id="form-submit" class="main-dark-button" onClick={()=>Delete(aim.id)} style={{ marginBlock : '10px'}} >Удалить цель</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                        })}
                                    </div>
                          
                                   
                            </section>
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
