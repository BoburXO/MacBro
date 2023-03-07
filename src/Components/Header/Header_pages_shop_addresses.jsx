import React from 'react';
import '../Header/Header.scss';

const Header_pages_shop_addresses = () => {
    return (
        <>
            <header className="pages__shop_addresses">
                <div className="container">
                    <div className="header__block">
                        <h1>Наши филиалы</h1>
                        <div className="card__all">
                            <ul className='top'>
                                <li><i className='fa-solid fa-store'></i>Магазин</li>
                                <li><i className='fa-solid fa-location-dot'></i>Адрес</li>
                                <li><i className='fa-regular fa-clock'></i>Режим работы</li>
                            </ul>
                            <ul>
                                <li>MacBro (Паркентская)</li>
                                <li>г. Ташкент, ул Паркентская, 219</li>
                                <li>с 10-00 до 20-00 (без выходных)</li>
                            </ul>
                            <ul>
                                <li>MacBro Навои</li>
                                <li className='center'>Г. Ташкент, Шайхонтахурский р-н, ул. <br /> Алишера Навои 27</li>
                                <li>с 10-00 до 20-00 (без выходных)</li>
                            </ul>
                            <ul>
                                <li>MacBro Ц-1</li>
                                <li className='center'>Г. Ташкент, Мирзо-Улугбекский р-н,<br /> Узбекистан овози, 21</li>
                                <li>с 10-00 до 21-00 (без выходных)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_pages_shop_addresses