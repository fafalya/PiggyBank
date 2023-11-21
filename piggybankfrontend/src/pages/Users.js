import React, { Fragment, useState } from 'react';

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
        </Fragment>
    );
};
export default Users;