import React from 'react'

const Header_pages_suggestions = () => {
    return (
        <>
            <header className="pages__suggestions">
                <div className="container">
                    <div className="header__block">
                        <div className="left">
                            <h1>Предложить идею</h1>
                            <input type="text" placeholder='*Полное имя' />
                            <input type="text" placeholder='*Номер телефона' />
                            <input type="text" placeholder='*Сообщения' className='massage' />
                            <button>Отправить</button>
                        </div>
                        <div className="right">
                            <h3>Контактная информация</h3>
                            <p><i class="fa-solid fa-phone"></i> +998787772020</p>
                            <p><i class="fa-solid fa-envelope"></i> macbroofficial@gmail.com</p>
                            <p><i class="fa-solid fa-location-dot"></i> г. Ташкент, ул Паркентская, 219</p>
                            <p><i class="fa-solid fa-location-dot"></i> Г. Ташкент, Шайхонтахурский р-н, ул. Алишера Навои 27</p>
                            <p><i class="fa-solid fa-location-dot"></i> Г. Ташкент, Мирзо-Улугбекский р-н, Узбекистан овози, 21</p>
                            <b>
                                <a href="https://t.me/macbrouz">
                                    <i class="fa-brands fa-telegram"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCa2sZELOq4F6cAGsY23A6TA">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://www.facebook.com/macbrouz/">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/macbro.uz/">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </b>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_pages_suggestions