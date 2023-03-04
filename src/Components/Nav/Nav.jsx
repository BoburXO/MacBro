import React, { useContext, useState } from 'react';
import "../Nav/Nav.scss";
import axios from 'axios';

// rsuite dan otaqilgan

import { Dropdown } from 'rsuite';

// react-modern-drawer dan otqazilgan

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Context } from '../../context';



const Nav = () => {

    const { dataSearch, mura, searchText } = useContext(Context);

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <nav>
                <div className="container">

                    <div className="nav__block">
                        <div className="nav__bars">
                            <button onClick={toggleDrawer}><i class="fa-solid fa-bars"></i></button>
                            <Drawer
                                open={isOpen}
                                onClose={toggleDrawer}
                                direction='top'
                                className='bla bla bla'
                            >
                                <div className="accardion__all">
                                    <Dropdown title="Язык" className='accardion'>
                                        <Dropdown.Item>Русский</Dropdown.Item>
                                        <Dropdown.Item>Узбекский</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Apple" className='accardion'>
                                        <Dropdown.Item>Mac</Dropdown.Item>
                                        <Dropdown.Item>iPhone</Dropdown.Item>
                                        <Dropdown.Item>iPad</Dropdown.Item>
                                        <Dropdown.Item>Watch</Dropdown.Item>
                                        <Dropdown.Item>AirPods</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Акустика" className='accardion'>
                                        <Dropdown.Item>Beats</Dropdown.Item>
                                        <Dropdown.Item>HomePod</Dropdown.Item>
                                        <Dropdown.Item>JBL</Dropdown.Item>
                                        <Dropdown.Item>Harman Kardon</Dropdown.Item>
                                        <Dropdown.Item>Marshall</Dropdown.Item>
                                        <Dropdown.Item>Nillkin</Dropdown.Item>
                                        <Dropdown.Item>2E</Dropdown.Item>
                                        <Dropdown.Item>Yandex</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Аксессуары" className='accardion'>
                                        <Dropdown.Item>Чехлы и стекла</Dropdown.Item>
                                        <Dropdown.Item>Зарядчики</Dropdown.Item>
                                        <Dropdown.Item>Прочие аксессуары</Dropdown.Item>
                                        <Dropdown.Item>Аксессуары Apple</Dropdown.Item>
                                        <Dropdown.Item>Сумки для Ноутбуков</Dropdown.Item>
                                        <Dropdown.Item>Ремешки Watch</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Смартфоны" className='accardion'>
                                        <Dropdown.Item>Redmi Note Series</Dropdown.Item>
                                        <Dropdown.Item>Redmi Series</Dropdown.Item>
                                        <Dropdown.Item>Poco</Dropdown.Item>
                                        <Dropdown.Item>Google Pixel</Dropdown.Item>
                                        <Dropdown.Item>MI</Dropdown.Item>
                                        <Dropdown.Item>Motorola</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Samsung" className='accardion'>
                                        <Dropdown.Item>Galaxy Tab</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Buds</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Watch</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Series S</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Series A</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Series M</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Series Note</Dropdown.Item>
                                        <Dropdown.Item>Gusto</Dropdown.Item>
                                        <Dropdown.Item>Galaxy Series Z</Dropdown.Item>
                                        <Dropdown.Item>Others</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Xiaomi" className='accardion'>
                                        <Dropdown.Item>Watches</Dropdown.Item>
                                        <Dropdown.Item>EarBuds</Dropdown.Item>
                                        <Dropdown.Item>Others</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Игровые приставки" className='accardion'>
                                        <Dropdown.Item>SONY</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Планшеты" className='accardion'>
                                        <Dropdown.Item></Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Наушники" className='accardion'>
                                        <Dropdown.Item></Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Ноутбуки" className='accardion'>
                                        <Dropdown.Item></Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Кнопочные телефоны" className='accardion'>
                                        <Dropdown.Item>Кнопочные телефоны</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Подержанные гаджеты" className='accardion'>
                                        <Dropdown.Item>Подержанные гаджеты</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown title="Войти" className='accardion'>
                                    </Dropdown>
                                </div>
                            </Drawer>
                        </div>
                        <div className="nav__left">
                            <h1>MacBro</h1>
                        </div>
                        <div className="nav__center">
                            <p>Mac</p>
                            <p>iPhone</p>
                            <p>iPad</p>
                            <p>Watch</p>
                            <p>AirPods</p>
                            <div className='nav__dropdown'>
                                <Dropdown title="Акустика">
                                    <Dropdown.Item>HomePod</Dropdown.Item>
                                    <Dropdown.Item>Beats</Dropdown.Item>
                                    <Dropdown.Item>JBL</Dropdown.Item>
                                    <Dropdown.Item>Harman Kardon</Dropdown.Item>
                                    <Dropdown.Item>Marshall</Dropdown.Item>
                                    <Dropdown.Item>Nillkin</Dropdown.Item>
                                    <Dropdown.Item>Yandex</Dropdown.Item>
                                    <Dropdown.Item>2E</Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='nav__dropdown'>
                                <Dropdown title="Аксессуары">
                                    <Dropdown.Item>Чехлы и стекла</Dropdown.Item>
                                    <Dropdown.Item>Зарядчик</Dropdown.Item>
                                    <Dropdown.Item>Прочие аксессуары</Dropdown.Item>
                                    <Dropdown.Item>Аксессуары Apple</Dropdown.Item>
                                    <Dropdown.Item>Сумки для Ноутбуков</Dropdown.Item>
                                    <Dropdown.Item>Ремешки Watch</Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='nav__dropdown'>
                                <Dropdown title="Смартфоны">
                                    <Dropdown.Item>Redmi Series</Dropdown.Item>
                                    <Dropdown.Item>MI</Dropdown.Item>
                                    <Dropdown.Item>Google Pixel</Dropdown.Item>
                                    <Dropdown.Item>Poco</Dropdown.Item>
                                    <Dropdown.Item>Motorola</Dropdown.Item>
                                    <Dropdown.Item>Redmi Note Series</Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='nav__dropdown'>
                                <Dropdown title="Samsung">
                                    <Dropdown.Item>Galaxy Series Note</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Series S</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Series A</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Series Z</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Series M</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Tab</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Buds</Dropdown.Item>
                                    <Dropdown.Item>Galaxy Watch</Dropdown.Item>
                                    <Dropdown.Item>Gusto</Dropdown.Item>
                                    <Dropdown.Item>Others</Dropdown.Item>
                                </Dropdown>
                            </div>

                            <p>Trade in</p>

                        </div>
                        <div className="nav__right">
                            <p>Bro <br /> <span>Servise</span></p>
                            <label htmlFor="check" className='checkbtn'>
                                <i className=' fa-solid fa-magnifying-glass'></i>

                                <input type="text" id='check'
                                    value={mura}
                                    onChange={searchText.bind(this)}
                                    placeholder="поиск" />
                                <div className="rows">
                                    {mura === "" ? (
                                        null
                                    ) : (
                                        dataSearch.map((el) => {
                                            return (
                                                <div className="row">
                                                    <div className="card__search">
                                                        <img src={el.image} />
                                                        <h2>{el.name}</h2>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )}
                                </div>

                            </label>
                            <i className='fa-solid fa-heart'></i>
                            <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-solid fa-right-to-bracket'></i>
                            <Dropdown title="РУ">
                                <Dropdown.Item>O'Z</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav