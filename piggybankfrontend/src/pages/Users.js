import React, { Fragment } from 'react';

function Users() {
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
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Имя"/>
            </div>
        </Fragment>
    );
};
export default Users;