import React from 'react';
import '../Header/Header.scss';

const Header_pages_for_business = () => {
    return (
        <>
            <header className="pages__for_business">
                <div className="container">
                    <div className="header__block">
                        <div className="card">
                            <div className="left">
                                <h1>Для бизнеса</h1>
                                <p>Заказать звонок</p>
                            </div>
                            <div className="right">
                                <div className="input__text">
                                    <input type="text" placeholder='ФИО' />
                                    <span>*</span>
                                </div>
                                <div className="input__text">
                                    <input type="text" placeholder='Телефон' />
                                    <span>*</span>
                                </div>
                                <div className="input__text">
                                    <input type="text" placeholder='Регион' />
                                    <span>*</span>
                                </div>
                                <div className="input__text">
                                    <input type="text" placeholder='Собщения' />
                                    <span>*</span>
                                </div>
                            <button>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_pages_for_business