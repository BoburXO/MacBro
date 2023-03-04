import React from 'react';

const Header_pages_bro_service = () => {
    return (
        <>
            <header className="pages__bro_service">
                <div className="container">
                    <div className="header__block">
                        <div className="header__top_1">
                            <div className="left">
                                <h1>Чем можем вам помочь?</h1>
                                <div className="input__text">
                                    <p><span>*</span>Полное имя</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="input__text">
                                    <p><span>*</span>Номер телефона</p>
                                    <input type="number" name="" id="" placeholder='+998' required />
                                </div>
                                <div className="input__text">
                                    <p><span>*</span>Модель телефона</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="input__text">
                                    <p><span>*</span>Какая услуга вам нужна?</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="input__text">
                                    <p>Сообщение</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <button>Продолжить</button>
                            </div>
                            <div className="right">
                                <img src="https://macbro.uz/_next/static/image/public/images/Service.fe552bc774ec9e65ed841da54b2f6c42.jpg" alt="" />
                            </div>
                        </div>
                        <div className="header__center_1">
                            <iframe src="https://yandex.ru/maps/10335/tashkent/category/computer_repairs_and_services/184105768/" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_pages_bro_service