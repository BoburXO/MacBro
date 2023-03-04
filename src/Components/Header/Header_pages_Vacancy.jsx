import React from 'react';
import '../Header/Header.scss';

const Header_pages_Vacancy = () => {
    return (
        <>
            <header className="pages__vacancy">
                <div className="header__block">
                    <div className="top">
                        <div className="container">
                            <h1>Присоединяйся и меняй мир вместе с нами</h1>
                        </div>
                    </div>
                    <div className="container">
                        <h1>Открытые вакансии</h1>
                        <p>На данный момент нет активных вакансий</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_pages_Vacancy