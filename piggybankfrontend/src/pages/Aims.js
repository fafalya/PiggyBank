import React, { Fragment,useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { UrlAims, UrlUsers, UrlUploadImages } from '../urls/urlsList';
import ImagesUpload from '../components/ImagesUpload/ImagesUpload';
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
    var imagesArray;
    const handleDataImages = (data) => {
        console.log('что получила из imagesupload');
        console.log(data);
        setDataResponseImage(data);
        console.log('положилось ли информация куда надо ');
        console.log(dataResponseImage)
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
        console.log("ready for uploading images");
        try {
            console.log("ready for uploading images");
            console.log(imagesArray);
            console.log("finish uploading images");
            setAim({... aim , date:selectDate, imagesId:imagesArray})
            console.log(aim.imagesId);
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
            setAim("");
            //ClearInput();
            Load();
        } catch(error){
            alert(error);
        }
    }

    async function postImages()  {
        const formData = new FormData();
        for (const data of dataResponseImage) {
            console.log(data);
        }
        for (let i = 0; i < dataResponseImage.length; i++) {
            formData.append('images', dataResponseImage[i].file);
        }
        console.log("смотрим что лежит в формДате");
        for (const data of formData) {
            console.log(data);
        }
        try {
            await axios.post(UrlUploadImages, formData)
                .then((res) => {
                    //выводим ответ от сервера (массив id изображений)
                    console.log("выводим ответ от сервера (массив id изображений)");
                    console.log(res.data);                   
                    imagesArray = res.data;
                    console.log("выводи что лежит в ответе (массиве imagesArray1)");
                    console.log(imagesArray);
                })
            console.log('Изображения успешно добавлены11111111');
        }
        catch (e) {
            console.log('Ошибка добавления изображений')
        }
    }
    async function Add(){
        console.log("теститруем1")
        await postImages();
        await AddNewAim();
        console.log("теститруем2")
        console.log(aim)
    }
    // function postFlower() {
    //     try {
    //         var dBcategory = document.getElementById("dropdownButtonCategory")
    //         var dBcolor = document.getElementById("dropdownButtonColor")
    //         var dBCountry = document.getElementById("dropdownButonCountry")
    //         //console.log(dBcategory.dataset.idcategory)
    //         //console.log(dBcolor.dataset.idcolor)
    //         //console.log(dBCountry.dataset.idcountry)

    //         var flower = {
    //             title: inputValueFlower.title,
    //             price: inputValueFlower.price,
    //             count: inputValueFlower.count,
    //             categoryId: dBcategory.dataset.idcategory,
    //             colorId: dBcolor.dataset.idcolor,
    //             countryId: dBCountry.dataset.idcountry,
    //             imagesId: imagesArray
    //         };
    //         console.log(flower);
    //         axios.post(urlFlowers, flower);
    //     }
    //     catch (e) {
    //         alert('Ошибка добавления цветка')
    //     }
    //     alert('Цветок успешно добавлен')
    // }

    function ShowDate(){
        console.log("test for date start");
        console.log(selectDate);
        console.log("test for date end")
    }
    
     
    
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
                                <h4>В процессе разработки</h4>
                                <h2>Цели для накопления</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <label  class="form-label">Кто будет копить?</label>
                <select class="form-select" aria-label="Default select example" placeholder="пользователь" onChange={handleAddUser}>
                    <option defaultValue selecte disabled>Выберите пользователя</option>
                    {/* {userList.map((u) => <option value={u.id} key={u.id} onClick={()=> {setUser(u)}}>{u.name}</option>) } */}
                    {userList.map((u) => <option value={u.id} key={u.id} >{u.name}</option>) }
                    {/* {userList.map((user) => <option value={user.id} key={user.id} onClick={()=> {setAim({...aim, user:{id: user.id, name: user.name}})}}>{user.name}</option>) } */}
                </select>
            </div>

            
            <div class="container">
                <label for="exampleFormControlInput1" class="form-label">На что будем копить?</label>
                <input type="text" class="form-control" 
                value={aim.title} placeholder="Хотелка" 
                onChange={event =>setAim({...aim, title: event.target.value})}/>
            </div>
            <div class="container">
                <label for="exampleFormControlTextarea1" class="form-label">Сколько нужно накопить?</label>
                <input type="text" class="form-control" 
                value={aim.price}  placeholder="Сумма" 
                onChange={event =>setAim({...aim, price: event.target.value})}/>
            </div>
            <div class="container">
                <label for="exampleFormControlTextarea1" class="form-label">К какой дате нужно накопить?</label>
                <div>
                    <DatePicker selected={selectDate} onChange={date => setSelectedDate(date)} dateFormat={"dd/MM/yyyy"} minDate={new Date()} />
                </div>
            </div>

            <div class="container">
                <button type="submit" class="btn btn-info" onClick={ShowDate}>show user</button>
            </div>

            <div>
            <ImagesUpload arrayImages={ handleDataImages}  />
            <div class="container">
                <button type="submit" class="btn btn-info" onClick={postImages}>Добавить изображения</button>
            </div>
            </div>

            {/* <div class="container">
                <label for="exampleFormControlTextarea1" class="form-label">Картинка хотелки для мотивации</label>
                <input type="text" class="form-control" 
                value={aim.picture} placeholder="Изображение" 
                onChange={event =>setAim({...aim, picture: event.target.value})}/>
            </div> */}
            <div class="container">
                <label for="exampleFormControlTextarea1" class="form-label">Каким способом будем копить?</label>
                <input type="text" class="form-control" 
                value={aim.waySaving}  placeholder="Способ накопления" 
                onChange={event =>setAim({...aim, waySaving: event.target.value})}/>
            </div>
            <div class="container">
                <button type="submit" class="btn btn-info" onClick={Add}>Добавить цель</button>
            </div>


        </Fragment>

        
    );
};
export default Aims;
