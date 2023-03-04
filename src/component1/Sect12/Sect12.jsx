import React from 'react'
import { useParams } from 'react-router-dom';
import "../Sect12/Sect12.css"

const Sect12 = ({data}) => {
    const {desc} = useParams();
    return (
    <>
    <section>
        <div className="sect12__otadiv">
              
            {data?.filter((el) => el?.desc == desc).slice(0,1).map((el) => {
              return (
                <div className="container" key={el._id}>
                    <div className="sect12__otadiv__div" key={el._id}>
                        <h1>{el.desc}</h1>
                        <p>Интернет-магазин MacBro предлагает купить ноутбуки MacBook в Ташкенте. Компания специализируется на поставках этой электроники уже более 14 лет. Мы являемся дистрибьютором Apple в Узбекистане, что позволяет обеспечить оптимальные условия продажи популярных ноутбуков от ведущего американского производителя. Ознакомьтесь с информацией о продукции, представленной в этой рубрике каталога,
                        и преимуществами продажи лэптопов Макбук в Узбекистане в интернет-магазине MacBro. Также в обзоре даны ответы на часто задаваемые вопросы покупателей.</p>
                    </div>
                </div>
              )
          })}
            
            <div className="hr">
                <hr />
                <div className="container1">
                    <div className="hr__text">
                        <h6><a href="/">Посмотреть все продукты</a></h6>
                        <h6>Сортировать по:<b style={{background: "#ffffff"}}>Новейшие</b></h6>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Sect12