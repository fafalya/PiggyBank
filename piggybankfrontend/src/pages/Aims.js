import React, { Fragment,useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { UrlAims, UrlUsers, UrlUploadImages, UrlAimsByUserId } from '../urls/urlsList';
import ImagesUpload from '../components/ImagesUpload/ImagesUpload';
import AimCards from '../components/AimCards/AimCards';
import axios from 'axios';
import ModalWindowOk from '../components/ModalWindow/ModalWindowOk';
import Cookies from 'universal-cookie';





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
    
    var today = new Date();
    //var day = today - aimByUser.data;

    const[aimList,setAimList] = useState([])
    const[userList,setUserList] = useState([])
    const[users,setUser]=useState()
    const[aimByUser, setAimByUser]=useState([])
    const [dataResponseImage, setDataResponseImage] = useState([]);
    // const handleAddUser = (event) => {
    //     let event_id = parseInt(event.target.value)
    //     const result = userList.find(u => u.id === event_id)
    //     setAim({
    //         ...aim,
    //         userId: result.id
    //     })
    // }
    async function handleAddUser () {
        // let temp_id = parseInt(selectUser.value)
        // console.log(temp_id)
        // const result = userList.find(u => u.id === temp_id)
        // console.log(result.id)
        // setAim({
        //     ...aim,
        //     userId: result.id
        // })
        // console.log(aim.userId)
    }
    // const handleAddWay = (event) => {
    //     event.preventDefault();
    //     let way = parseInt(event.target.value)
    //     setAim({
    //         ...aim,
    //         waySaving: way
    //     })
    // }
    var imagesArray;
    //var temp_id;
    const[tempId, setTempId]=useState(null);
    const handleDataImages = (data) => {
        setDataResponseImage(data);
    }

    const WayOptions = [
        { value: '1', label: 'Магия маленьких чисел' },
        { value: '2', label: 'Округление ежедневного остатка на счете' },
        { value: '3', label: 'Фиксированная сумма каждый день' }
    ]
    const [selectedOption, setSelectedOption] = useState(null);   
    const WaySelect = () => (
        <Select options={WayOptions} placeholder='Выбери спсоб накопления' defaultValue={selectedOption}
        onChange={setSelectedOption}/>
    )

    // const UserOptions = userList.map((u) => {
    //     return (
    //         {value: u.id, label: u.name}
    //     )
    // })
    // const [selectUser, setSelectUser] = useState(null);
    // const UserSelect =() => (
    //     <Select options={UserOptions} placeholder='Выбери пользователя' defaultValue={selectUser} onChange={setSelectUser}/>
        
    // )

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


    // const optionsAuthors = authors.map((a) => {
    //     return (
    //         <option value={a.id} key={a.id}>{`${a.firstName} ${a.lastName}`}</option>
    //     )
    // })

    useEffect(()=>{
        setTempId(cookies.get('userId'));
        if(tempId!==null){
            (async ()=> await Load())();
        }
        
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

        const resultLoadingAimsByUserId = await axios.get(UrlAimsByUserId + tempId, config);
        setAimByUser(resultLoadingAimsByUserId.data);
        console.log(resultLoadingAimsByUserId.data);
    }

    

    async function AddNewAim () {
        console.log(selectDate)
        try {
            var tempAim = {
                title: aim.title,
                price: aim.price,
                date: selectDate,
                wayOfSaving: parseInt(selectedOption.value),
                userId: tempId,
                imagesId: aim.imagesId
            }
            //setTempId(parseInt(selectUser.value));
            //temp_id = parseInt(selectUser.value);
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
                })
            console.log('Добавили изображения');
        }
        catch (e) {
            console.log('Ошибка добавления изображений')
        }
    }

    async function CheckAim() {
        if (aim.title != null && aim.price !=null && aim.date !=null && aim.wayOfSaving !=null && aim.userId !=null){
            console.log('Aim is not empty');
            await AddNewAim();
            //await LoadAims(tempId);
        }
        console.log('Aim is empty')

    }
    async function Add(){
        await postImages();
        await handleAddUser();
        setAim({... aim , imagesId:imagesArray});
        await CheckAim();
        
        //await AddNewAim();
    }

    async function LoadAims(userId){
        const resultLoadingAimsByUserId = await axios.get(UrlAimsByUserId + userId, config);
        setAimByUser(resultLoadingAimsByUserId.data);
        console.log(aimByUser);
        
    }



    const ShowAim = ()=> {
        
        console.log("cheeeeck");
        console.log(tempId);
        //проблема с условием для map
        //const condition = aimList.find(a => a.userId === tempId);
        <Fragment>
            <h1>ffffffffffff</h1>
        {aimByUser.map(function fn(aim) {

        return (    

        <div>
            <h1>TEEEEEEST</h1>
        <div className="col-lg-9">
            <div className="row">
                <div className="col-lg-12">
                    <div className="event-item">
                        <div className="row">
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
                                            <span>{aim.title}</span>
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
            </div>
        </div>
        </div>
        
        )})}
        </Fragment>
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
                                    {/* <span>Кто будет копить?</span><p style={{ margin : '10px' }}></p>
                                    <UserSelect  style={{  width: '860px' }}/> <p style={{ margin : '10px' }}></p> */}
                                    {/* <select class="form-select" aria-label="Default select example" placeholder="пользователь" onChange={handleAddUser} style={{  width: '860px' }}>
                                        <option defaultValue selecte disabled>Выберите пользователя</option>
                                        {userList.map((u) => <option value={u.id} key={u.id} >{u.name}</option>) }
                                    </select><p style={{ margin : '10px' }}></p> */}
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
<ShowAim />
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
                                        {/* <div className="col-lg-3">
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
                                        </div> */}

                                        {/* Showing aims */}
                                        {/* {aimList.map(function fn(aim)  {
                                             return ( */}
                                        {aimByUser.map((aim) => {
                                             return (        
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="event-item">
                                                        <div className="row">

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
                                                                            <h6>Осталось копить<br/>{aim.data}</h6>
                                                                        </li>
                                                                        <li>
                                                                            <i class="fa fa-arrow-right"></i>
                                                                            <span>{aim.title}</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-users"></i>
                                                                            <span>{Math.floor(aim.price/aim.data)}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
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
            {/* <AimCards/> */}
        </Fragment>

        
    );
};
export default Aims;
