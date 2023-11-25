import React, { Fragment, useEffect, useState } from 'react';
import { UrlUsers } from '../urls/urlsList';
import axios from 'axios';

const Users =() => {
    const [user, setUser] = useState({
        name: '',
        aims: {
            id: 0,
            title: '',
            price: '',
            date: '',
            picture: '',
            waySaving: '',
        }
    })

    const[userList,setUserList] = useState([])

    useEffect(()=>{
        (async ()=> await Load())();
    },[])

    async function Load(){
        const resultLoading = await axios.get(UrlUsers);
        setUserList(resultLoading.data);
        console.log(resultLoading.data);
    }

    async function AddNewUser (event) {
        event.preventDefault();
        try {
            await axios.post(UrlUsers,{
                name: user.name,               
            });
            alert("Добавили нового пользователя");
            setUser("");
        } catch(error){
            alert(error);
        }
    }



    return (
        <Fragment>
            <div className="page-heading-shows-events">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Авторизация</h2>
                            <span>В процессе разработки</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <label for="exampleFormControlInput1" class="form-label">Нужно ввести имя пользователя</label>
                <input type="text" class="form-control" 
                value={user.name} placeholder="Имя"
                onChange={event =>setUser({...user, name: event.target.value})}/>
            </div>
            <div class="container">
                <button type="button" class="btn btn-info" onClick={AddNewUser}>Добавить пользователя</button>
            </div>
        </Fragment>
    );
};
export default Users;