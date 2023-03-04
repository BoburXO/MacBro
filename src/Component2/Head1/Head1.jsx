import React from 'react'
import "../Head1/Head1.css"
import { useCart } from 'react-use-cart'
import { Link, useParams } from 'react-router-dom'

const Head = ({data}) => {
  const {_id} = useParams();
  const {el , isEmpty, removeItem, updateItemQuantity } = useCart();
  return (
    <><br /><br />
    <section>
      <div className="container">
        <div className="head1__otadiv">
          {data?.filter((el) => el?._id == _id).map((el) => {
            return (
            <div className='head1__otadiv1' key={el._id}>
              <div className='head1__otadiv__div'>
                <img className='head1__otadiv__div__img' src={el.image} alt="" />
              </div>
              <div className="head1__otadiv__text">
                <div className='head1__otadiv__text__div'>
                  <h1 className='head1__otadiv__text__h1'>{el.name}</h1>
                  <i className="fa-solid fa-copy kopy"></i>
                </div>
                <div className='head1__otadiv__text__div'>
                <h1 className='head1__otadiv__text__h11'>{el.desc}</h1>
                <i className="fa-regular fa-heart lik"></i>
                </div>
                <div className="head1__otadiv1__price">
                  <h1 className='head1__otadiv1__price__h1'>{el.price} сум</h1>
                  <p className='head1__otadiv1__price__p'>{el.price + 2343000} сум</p>
                </div>
                <div className="head1__otadiv__text__btn">
                  <div className='head1__otadiv__text__btn1'>
                    <button  type="button" className="btn btn-outline-primary btn1">Добавить в корзину</button>
                    <button type="button" className="btn btn-primary btn2">Купить в один клик</button>
                  </div><br />
                  <div className='head1__otadiv__text__btn2'>
                    <button  className='head1__otadiv__text__btn2__btn'>Купить в рассрочку</button><br /><br />
                    <button className='head1__otadiv__text__btn2__btn1'>Купить в рассрочку от MacBro</button><br /><br />
                    <button className='head1__otadiv__text__btn2__btn2'>Сравнить</button><br />
                  </div>
                </div>
              </div>  
            </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}

export default Head