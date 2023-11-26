import React, { Fragment, useEffect, useState } from 'react';
import { UrlUsers, UrlUsersById } from '../urls/urlsList';
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
            ClearInput();
            Load();
        } catch(error){
            alert(error);
        }
    }

    async function EditUser (userList) {
        console.log(userList);
        setUser(userList)
        //setUser(user.name);
        // console.log(user.id);
        // try { 
        //     await axios.patch(UrlUsersById + user.id, {
        //         name: user.name
        //     });
        //     alert("Пользователь отредактирован");
        //     setUser("");
        //     ClearInput();
        //     Load();

        // } catch (error) {
        //     alert(error);
        // }   
    }

    async function UpdateUser (event ){
        event.preventDefault();
        try {
            await axios.patch(UrlUsersById + userList.find((u)=>u.id === id), {
                name: user.name,
            });
            alert("Пользователь отредактирован");
            setUser("");
            ClearInput();
            Load();
        } catch(error){
            alert(error);
        }
    }

    async function DeleteUser (id){
        await axios.delete(UrlUsersById + id);
        alert("Пользователь удален");
        setUser("");
        Load();
    }
    async function ClearInput() {
        document.getElementById('inputName').value = '';
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
                <input type="text" class="form-control" id="inputName"
                value={user.name} placeholder="Имя"
                onChange={event =>setUser({...user, name: event.target.value})}/>
            </div>
            <div class="container">
                <button type="button" class="btn btn-info" onClick={AddNewUser}>Добавить пользователя</button>
                <button type="button" class="btn btn-warning" onClick={UpdateUser}>Принять изменения</button>
            </div>
            <div class="container">
            <table class="table">
                <thead>
                <tr class="table-info">
                        <th scope="col">Имя пользователя</th>
                        <th scope="col">Редактировать/Удалить</th>
                    </tr>
                </thead>
                {userList.map(function fn(user) {
                    return (
                        <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>
                        <button type="button" class="btn btn-warning" onClick={()=>EditUser(user)}>Редактировать</button>   
                        <button type="button" class="btn btn-danger" onClick={()=>DeleteUser(user.id)}>Удалить</button>
                        </td>
                    </tr>
                </tbody>
                    );
                })}
                
            </table>
            </div>
        </Fragment>
    );
};
export default Users;