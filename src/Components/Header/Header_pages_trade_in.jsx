import React from 'react';
import "../Header/Header.scss";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Header_pages_trade_in = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <header className='pages__trade_in'>
                <div className="container">
                    <div className="header__block_2">
                        <div className="header__top_1">
                            <div className="header__text_1">
                                <h1>Получайте лучшее с Macbro</h1>
                                <p>Услуга Trade in в MacBro позволяет вам заменить существующее устройство на новое устройство (определений модели) Apple или получить его сумму наличными</p>
                            </div>
                            <img src="https://macbro.uz/images/trade_in/headerImg.png" alt="" />
                        </div>
                        <div className="header__center_1">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="AirPods" value="1" />
                                            <Tab label="Watch" value="2" />
                                            <Tab label="iPhone" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div className="tappanel__top_1">
                                            <ul>
                                                <li><p>Ваше устройство</p></li>
                                                <li><p>Оцененный стоимость обмена</p></li>
                                            </ul>
                                        </div>
                                        <div className="tappanel__center_1">
                                            <ul>
                                                <li>AirPods Pro 2</li>
                                                <li>До 1 145 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>AirPods Pro</li>
                                                <li>До 801 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>AirPods 3</li>
                                                <li>До 744 250 сум</li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div className="tappanel__top_1">
                                            <ul>
                                                <li><p>Ваше устройство</p></li>
                                                <li><p>Оцененный стоимость обмена</p></li>
                                            </ul>
                                        </div>
                                        <div className="tappanel__center_1">
                                            <ul>
                                                <li>Apple Watch Series 8</li>
                                                <li>До 3 091 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>Apple Watch Series 7</li>
                                                <li>До 2 290 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>Apple Watch Series 6</li>
                                                <li>До 1 603 000 сум</li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div className="tappanel__top_1">
                                            <ul>
                                                <li><p>Ваше устройство</p></li>
                                                <li><p>Оцененный стоимость обмена</p></li>
                                            </ul>
                                        </div>
                                        <div className="tappanel__center_1">
                                            <ul>
                                                <li>iPhone 14 Pro Max (512GB)</li>
                                                <li>До 15 457 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 14 Pro Max (512GB)</li>
                                                <li>До 15 457 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 14 Pro Max (128GB)</li>
                                                <li>До 12 824 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 14 Pro (512GB)</li>
                                                <li>До 14 656 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 14 Pro (256GB)</li>
                                                <li>До 12 595 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 14 Pro (128GB)</li>
                                                <li>До 11 335 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 Pro Max (512GB)</li>
                                                <li>До 11 450 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 Pro Max (256GB)</li>
                                                <li>До 10 534 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 Pro Max (128GB)</li>
                                                <li>До 9 961 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 Pro (512GB)</li>
                                                <li>До 9 503 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 Pro (256GB)</li>
                                                <li>До 9 045 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 Pro (128GB)</li>
                                                <li>До 8 587 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 (256GB)</li>
                                                <li>До 7 213 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 13 (128GB)</li>
                                                <li>До 6 641 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 12 Pro Max (256GB)</li>
                                                <li>До 7 671 500 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 12 Pro Max (128GB)</li>
                                                <li>До 7 099 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 12 Pro (256GB)</li>
                                                <li>До 6 183 000 сум</li>
                                            </ul>
                                            <ul>
                                                <li>iPhone 12 Pro (128GB)</li>
                                                <li>До 5 725 000 сум</li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                        <div className="header__bottom_1">
                            <h1>Как осуществляется процесс ?</h1>
                            <div className="header__all_card_1">
                                <div className="header__card_1">
                                    <img src="	https://macbro.uz/images/trade_in/trade%20in%20icons1.png" alt="" />
                                    <p>1. Вы приносите свое устройство в один из шоурумов MacBro</p>
                                </div>
                                <div className="header__card_1">
                                    <img src="	https://macbro.uz/images/trade_in/trade%20in%20icons2.png" alt="" />
                                    <p>2. Мастера сервисного центра BroService проводят технический осмотр вашего устройства и оно будет оценено нашими квалифицированными специалистами</p>
                                </div>
                                <div className="header__card_1">
                                    <img src="	https://macbro.uz/images/trade_in/trade%20in%20icons3.png" alt="" />
                                    <p>3. Затем вы можете обменять устройство по установленной цене которое оценивают наши специалисты или приобрести выбранное устройство за дополнительную плату.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header_pages_trade_in