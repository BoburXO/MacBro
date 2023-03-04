import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "../Head/Head.css"

const Head = ({data}) => {
    const {desc} = useParams();
  
  return (
    <header className='header__1'>
      <div className="container">
        <div className="header__otadiv">
          {data?.filter((el) => el?.desc == desc).map((el) => {
              return (
                  <Link key={el._id} to={`/cart/${el._id}`}>
                    <div className="header__otadiv__div"><br />
                      <div className="header__otadiv__div__img1">
                          <img className='header__otadiv__div__img' src={el.image} alt="" />
                      </div><br />
                            <div className='header__otadiv__div__text'>
                              <h5>{el.name}</h5>
                              <h5><b>от {el.price} сум</b></h5>
                            </div><br />
                    </div>
                  </Link>
              )
          })}
        </div>
      </div>
  </header>
  )
}

export default Head
