import React, { useContext } from 'react';
import "../Nav/Nav.scss";

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
                            <h1><a href="/">MacBro</a></h1>
                        </div>
                        <div className="nav__center">
                            <p><a href="/data/Mac">Mac</a></p>
                            <p><a href="/data/iPhone">iPhone</a></p>
                            <p><a href="/data/iPad">iPad</a></p>
                            <p><a href="/data/Watch">Watch</a></p>
                            <p><a href="/data/Pods">AirPods</a></p>
                            <div className='nav__dropdown'>
                                <Dropdown title="Акустика">
                                    <Dropdown.Item><a href="/data/HomePod">HomePod</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Beats">Beats</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Jbl">JBL</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Harman">Harman Kardon</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Marshall">Marshall</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Nilkin">Nillkin</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Yandex">Yandex</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/2E">2E</a></Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='nav__dropdown'>
                                <Dropdown title="Аксессуары">
                                    <Dropdown.Item><a href="/data/Chexol">Чехлы и стекла</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Power">Зарядчик</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Aks">Прочие аксессуары</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Appleaks">Аксессуары Apple</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Appleaks">Сумки для Ноутбуков</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Remeshok">Ремешки Watch</a></Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='nav__dropdown'>
                                <Dropdown title="Смартфоны">
                                    <Dropdown.Item><a href="/data/Mi">Redmi Series</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Mi">Mi</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Google">Google Pixel</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Poco">Poco</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Motorola">Motorola</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Minote">Redmi Note Series</a></Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className='nav__dropdown'>
                                <Dropdown title="Samsung">
                                    <Dropdown.Item><a href="/data/Note">Galaxy Series Note</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Series%20S">Galaxy Series S</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Series%20A">Galaxy Series A</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Series%20Z">Galaxy Series Z</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/Series%20M">Galaxy Series M</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/">Galaxy Tab</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/">Galaxy Buds</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/">Galaxy Watch</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/">Gusto</a></Dropdown.Item>
                                    <Dropdown.Item><a href="/data/">Others</a></Dropdown.Item>
                                </Dropdown>
                            </div>

                            <p><a href="/Trade_in">Trade in</a></p>

                        </div>
                        <div className="nav__right">
                            <p><a href="/Bro_service">Bro <br /> <span>Servise</span></a></p>
                            <label htmlFor="check" className='checkbtn'>
                                <i className=' fa-solid fa-magnifying-glass'></i>

                                <input type="text" id='check'
                                    value={mura}
                                    onChange={searchText.bind(this)}
                                    placeholder="поиск" />
                            </label>
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