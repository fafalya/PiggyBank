import React, { Fragment,useEffect, useState } from 'react';
import { UrlAims, UrlUsers } from '../urls/urlsList';
import axios from 'axios';



const Aims =()=> {
    const [aim, setAim] = useState({
        title: '',
        price: '',
        date: '',
        picture: '',
        waySaving: '',
        user: {
            id: 0,
            name: ''
        }
    })

    const[aimList,setAimList] = useState([])
    const[userList,setUserList] = useState([])
    const[users,setUser]=useState()

    useEffect(()=>{
        (async ()=> await Load())();
    },[])

    async function Load(){
        const resultLoadingAims = await axios.get(UrlAims);
        setAimList(resultLoadingAims.data);
        console.log(resultLoadingAims.data);
        const resultLoadingUsers = await axios.get(UrlUsers);
        setUserList(resultLoadingUsers.data);
        console.log(resultLoadingUsers.data);
    }
    async function AddNewAim (event) {
        event.preventDefault();
        try {
            await axios.post(UrlAims,{
                title: aim.title,
                price: aim.price,
                date: aim.date,
                picture: aim.picture,
                waySaving: aim.waySaving,
                user: {
                    id: aim.user.id,
                    name: aim.user.name
                }              
            });
            alert("Добавили новую цель");
            setAim("");
            // ClearInput();
            Load();
        } catch(error){
            alert(error);
        }
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
                <select class="form-select" aria-label="Default select example" placeholder="Хотелка">
                    <option defaultValue selecte disabled>Пользователь</option>
                    {userList.map((user) => <option value={user.id} key={user.id} onClick={setUser(user)}>{user.name}</option>) }
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
                <input type="text"class="form-control" 
                value={aim.date}  placeholder="Дата" 
                onChange={event =>setAim({...aim, date: event.target.value})}/>
            </div>

            <section class="container">
            <h2 class="py-2">Datepicker in Bootstrap 5</h2>
            <form class="row">
            <label for="date" class="col-1 col-form-label">Date</label>
            <div class="col-5">
                <div class="input-group date" id="datepicker">
                    <input type="text" class="form-control" id="date"/>
                    <span class="input-group-append">
                        <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                        </span>
                    </span>        
                </div>
            </div>
            </form>
            </section>
            
            <div class="container">
                <label for="exampleFormControlTextarea1" class="form-label">Картинка хотелки для мотивации</label>
                <input type="text" class="form-control" 
                value={aim.picture} placeholder="Изображение" 
                onChange={event =>setAim({...aim, picture: event.target.value})}/>
            </div>
            <div class="container">
                <label for="exampleFormControlTextarea1" class="form-label">Каким способом будем копить?</label>
                <input type="text" class="form-control" 
                value={aim.waySaving}  placeholder="Способ накопления" 
                onChange={event =>setAim({...aim, waySaving: event.target.value})}/>
            </div>
            <div class="container">
                <button type="submit" class="btn btn-info" onClick={AddNewAim}>Добавить цель</button>
            </div>
        </Fragment>

        
    );
};
export default Aims;