import React from 'react';
import Slider from "react-slick";
import { product } from '../../product';
import '../Header/Header.scss';

const Header = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="header__block_1">
                        <Slider {...settings}>
                            {product.map((el) => {
                                return (
                                    <div className='header__card'>
                                        <div className="card__left">
                                            <h4>Новый</h4>
                                            <h1>{el.desc1}</h1>
                                            <h5>{el.desc2}</h5>
                                            <button>Купить</button>

                                        </div>
                                        <div className='card__right'>
                                            <img src={el.video} alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header