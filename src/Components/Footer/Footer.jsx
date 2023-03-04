import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__block_1">
                        <ul>
                            <li><a href=""><p>Sotib ol</p></a></li>
                            <li><a href="">Mac</a></li>
                            <li><a href="">iPad</a></li>
                            <li><a href="">iPhone</a></li>
                        </ul>
                        <ul>
                            <li><p>Kompaniya</p></li>
                            <li><a href="/News">Yangiliklar</a></li>
                            <li><a href="/About">Kompaniya haqida</a></li>
                            <li><a href="/Shop_addresses">Do'kon manzillari</a></li>
                            <li><a href="/For_business">Biznes uchun</a></li>
                            <li><a href="/Vacancy">Vakansiyalar</a></li>
                        </ul>
                        <ul>
                            <li><p>Ma'lumot</p></li>
                            <li><a href="/Sell">Siz uchun sotib beramiz!</a></li>
                            <li><a href="/Delivery">Yetkazib berish</a></li>
                            <li><a href="/Contact">Aloqa</a></li>
                            <li><a href="/Suggestions">Taklif bildirish</a></li>
                            <li><a href="/Esim">eSIM haqida</a></li>
                        </ul>
                        <ul>
                            <li><a href=""><p>Biz bilan bog'laning</p></a></li>
                            <li>
                                <a href="https://www.facebook.com/macbrouz/">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/macbro.uz/">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://t.me/macbrouz">
                                    <i class="fa-brands fa-telegram"></i>

                                </a>
                                <a href="https://www.youtube.com/channel/UCa2sZELOq4F6cAGsY23A6TA">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://www.tiktok.com/@macbro.uz">
                                    <i class="fa-brands fa-tiktok"></i>
                                </a>
                            </li>
                            <li><a href="tel:+998 78 777 20 20">+998 78 777 20 20</a></li>
                        </ul>
                    </div>
                    <div className="footer__block_2">
                        <ul>
                            <li>Onlayn do'kon MacBro.uz. Barcha huquqlar himoyalangan.</li>
                            <li>Developed by <a href="https://udevs.io/"><span>Udevs</span></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer