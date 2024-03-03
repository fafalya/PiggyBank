# Веб-приложение копилка PiggyBank
---
##### В приложении PiggyBank каждый зарегистрированный пользователь может создать свою цель для накопления, выбрать дату к которой хочет накопить, 
прикрепить изображение для дополнительной мотивации. Причем в зависимости от выбранного способа накопления приложение рассчитает 
какую сумму нужно сегодня положить в копилку.
---
## Общая информация о приложении
---  
##### Открывая приложение PiggyBank пользователь попадает на главную страницу. 
На этой странице можно найти основную информацию о приложении. По кнопке "Войти" можно попасть на страницу с авторизацией. По ссылке "Регистрация" пользователь
попадает на страницу с регистрацией.

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/Home.png)

Если на странице авторизации в поля для ввода ввести данные ранее незарегистрированного пользователя, то ссылка перебросит пользователя на страницу регистрации.

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/Auth.png)

Авторизовавшись пользователь попадает страницу, где ему предлогается создать цель для накопления. 

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/Aim.png)

Заполнив соответсвующие поля и нажав кнопку "Добавить цель"
отобразится список целей, созданных этим пользователем.

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/AimList.png)

При неверном запросе, например, «http://localhost:3000/5», отображается страница с ошибкой 404.

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/NotFound.png)
---
## Информация для разработчиков
---
##### На диаграмме ниже приведена структура приложения и стек технологий

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/app.png)

##### На диаграмме ниже приведена структура базы данных

[](https://github.com/fafalya/PiggyBank/blob/master/Diagrams/PiggyBank.png)


