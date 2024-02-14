import React, { Fragment,useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { UrlAims, UrlUsers, UrlUploadImages } from '../urls/urlsList';
import ImagesUpload from '../components/ImagesUpload/ImagesUpload';
import AimCards from '../components/AimCards/AimCards';
import axios from 'axios';





const Aims =()=> {
    const [aim, setAim] = useState({
        title: '',
        price: '',
        date: '',
        waySaving: '',
        // user: {
        //     id: 0,
        //     name: ''
        // },
        userId: '',
        imagesId: []
    })
    

    const[aimList,setAimList] = useState([])
    const[userList,setUserList] = useState([])
    const[users,setUser]=useState()
    const [selectDate, setSelectedDate] = useState(null)
    const [dataResponseImage, setDataResponseImage] = useState([]);
    const handleAddUser = (event) => {
        let event_id = parseInt(event.target.value)
        const result = userList.find(u => u.id === event_id)
        setAim({
            ...aim,
            // user: [{
            //     id: result.id,
            //     name: result.name,
            //     password: result.password,
            //     aims: result.aims
            // }],
            userId: result.id
        })
    }
    const handleAddWay = (event) => {
        let way = parseInt(event.target.value)
        setAim({
            ...aim,
            waySaving: way
        })
    }
    var imagesArray;
    const handleDataImages = (data) => {
        setDataResponseImage(data);
    }

    useEffect(()=>{
        (async ()=> await Load())();
        // const Load = async () => {
        //     const result = await axios.get(UrlAims);
        //     setAimList(result.data);
        // }
        // Load();
    },[])

    async function Load(){
        const resultLoadingAims = await axios.get(UrlAims);
        setAimList(resultLoadingAims.data);
        console.log(resultLoadingAims.data);

        const resultLoadingUsers = await axios.get(UrlUsers); 
        setUserList(resultLoadingUsers.data);
        console.log(resultLoadingUsers.data);
    }

    

    async function AddNewAim () {
        try {
            setAim({... aim , date:selectDate, imagesId:imagesArray})
            await axios.post(UrlAims,{
                title: aim.title,
                price: aim.price,
                date: aim.date,
                waySaving: aim.waySaving,
                // user: {
                //     id: aim.user.id,
                //     name: aim.user.name,
                //     password: aim.user.password,
                //     aims: aim.user.aims
                // },
                userId: aim.userId,
                imagesId: aim.imagesId              
            });
            alert("Добавили новую цель");
            console.log(aim.waySaving);
            setAim("");
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
            await axios.post(UrlUploadImages, formData)
                .then((res) => {                 
                    imagesArray = res.data;
                })
            console.log('Добавили изображения');
        }
        catch (e) {
            console.log('Ошибка добавления изображений')
        }
    }
    async function Add(){
        await postImages();
        await AddNewAim();
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
                                    <span>Кто будет копить?</span><p style={{ margin : '10px' }}></p>
                                    <select class="form-select" aria-label="Default select example" placeholder="пользователь" onChange={handleAddUser} style={{  width: '860px' }}>
                                        <option defaultValue selecte disabled>Выберите пользователя</option>
                                        {userList.map((u) => <option value={u.id} key={u.id} >{u.name}</option>) }
                                    </select><p style={{ margin : '10px' }}></p>
                                    <span>На что будем копить?</span><p style={{ margin : '10px' }}></p>
                                    <input type="text" class="form-control" style={{  width: '860px' }}
                                    value={aim.title} placeholder="Хотелка" 
                                    onChange={event =>setAim({...aim, title: event.target.value})}/><p style={{ margin : '10px' }}></p>
                                    <span>Сколько нужно накопить?</span><p style={{ margin : '10px' }}></p>
                                    <input type="text" class="form-control" style={{  width: '860px' }}
                                    value={aim.price}  placeholder="Сумма" 
                                    onChange={event =>setAim({...aim, price: event.target.value})}/><p style={{ margin : '10px' }}></p>
                                    <span>К какой дате нужно накопить?</span><p style={{ margin : '10px' }}></p>
                                    <DatePicker selected={selectDate} onChange={date => setSelectedDate(date)} dateFormat={"dd/MM/yyyy"} minDate={new Date()} /><p style={{ margin : '10px' }}></p>
                                    <span>Добавь картинку цели для мотивации</span><p style={{ margin : '10px' }}></p>
                                    <ImagesUpload arrayImages={ handleDataImages} /><p style={{ margin : '10px' }}></p>
                                    <span>Каким способ будем копить?</span><p style={{ margin : '10px' }}></p>
                                    <select class="form-select"  onChange={handleAddWay} style={{  width: '860px' }}>
                                        <option defaultValue selecte disabled>Выбери способ</option>
                                        <option value="1">Магия маленьких чисел</option>
                                        <option value="2">Округление ежедневного остатка на счете</option>
                                        <option value="3">Фиксированная сумма каждый день</option>
                                    </select><p style={{ margin : '10px' }}></p>
                                    <button type="submit" id="form-submit" class="main-dark-button" onClick={Add} style={{ marginBlock : '10px'}} >Добавить цель</button><p style={{ margin : '10px' }}></p>
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
