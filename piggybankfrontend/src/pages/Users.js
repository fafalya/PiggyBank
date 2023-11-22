import React, { Fragment, useState } from 'react';
import { UrlUsers } from '../urls/urlsList';

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

    const AddNewUser = (event) => {
        event.preventDefault()
        const newUser = {...user}
        create(newUser)
        alert('Добавили нового пользователя')
        console.log('Добавили нового пользователя', newUser)
    }
    const create =(newUser) => {
        try {
            const result = fetch(UrlUsers,{
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let json = result.json();
            console.log("Успешно выполнено", JSON.stringify(json));
        } catch (error){
            console.log("Ошибка", error);
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