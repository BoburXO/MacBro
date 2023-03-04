import React from 'react'

const Header_pages_delivery = () => {
  return (
    <>
      <header className="pages__delivery">
        <img src="	https://macbro.uz/images/delivery_banner.png" alt="" />
        <div className="container">
          <div className="header__block">
            <h1>Интернет-магазин MacBro предлагает разнообразные услуги доставки с высоким качеством.</h1>
            <div className="all__card">
              <div className="card">
                <i className="fa-solid fa-calendar-check"></i>
                <h1>Продажа в рассрочку</h1>
              </div>
              <div className="card">
                <i className="fa-solid fa-truck"></i>
                <h1>Своевременная доставка</h1>
              </div>
              <div className="card">
                <i className="fa-solid fa-gears"></i>
                <h1>Своевременная доставка</h1>
              </div>
            </div>
            <div className="text">
              <p>Доставка</p>
              <ul>
                <li>Доставка электроники по Узбекистану - 50 000 сум</li>
                <li>Доставка аксессуаров (чехлы, наушники, клавиатуры, мышки и т.д.) – 30 000 сум</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header_pages_delivery