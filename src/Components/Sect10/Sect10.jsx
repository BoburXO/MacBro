import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../Sect10/Sect10.css"

const Sect10 = ({data}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };

      const novy =data?.filter(el => el.name === "MacBook Pro 16-inch")
      const novy1 =data?.filter(el => el.name === "iPhone 14 Pro")
      const novy2 =data?.filter(el => el.name === "iPhone 14 Plus")
      const novy3 =data?.filter(el => el.name === "iPhone 14 Plus")
      const novy4 =data?.filter(el => el.name === "iPad Pro 12.9-inch")
      const novy5 =data?.filter(el => el.name === "iPad Pro 11-inch")
      const novy6 =data?.filter(el => el.name === "iPad (10th Gen 2022)")
      const novy7 =data?.filter(el => el.name === "Apple Watch Ultra")
      const novy8 =data?.filter(el => el.name === "Apple Watch SE 2")
      const novy9 =data?.filter(el => el.name === "Apple Watch Series 8 Gold Stainless Steel Case/Gold")
      const novy10 =data?.filter(el => el.name === "AirPods Pro 2")
      
      
      
      
  return (
    <>
    {/* FT code start */}
    <section>
        <div className="container">
        <h1 className="sect10__text">Новинки</h1>
            <div className="sect10__slider"> 
                <div className="sect10__slider__otadiv">
                    <Slider {...settings}>
                <div className="sect10__slider__img__div1">
                    {novy?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 

                <div className="sect10__slider__img__div1">
                    {novy?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div>

                <div className="sect10__slider__img__div1">
                    {novy1?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 

                <div className="sect10__slider__img__div1">
                    {novy1?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div>
                  
                <div className="sect10__slider__img__div1">
                    {novy2?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 

                <div className="sect10__slider__img__div1">
                    {novy3?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 

                <div className="sect10__slider__img__div1">
                    {novy4?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 
                    
                <div className="sect10__slider__img__div1">
                    {novy5?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div>   

                <div className="sect10__slider__img__div1">
                    {novy6?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div>

                <div className="sect10__slider__img__div1">
                    {novy7?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div>

                <div className="sect10__slider__img__div1">
                    {novy9?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div>

                <div className="sect10__slider__img__div1">
                    {novy8?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 

                <div className="sect10__slider__img__div1">
                    {novy10?.map((el) => {
                        return (
                            <Link key={el._id} to={`/cart/${el._id}`}>
                        <div className="sect10__slider__img__div mx-1" key={el._id}>
                            <div className="sect10__slider__img"> 
                                <img className="sect10__slider__img1" src={el.image} alt="" />
                            </div><br />

                            <div className="sect10__slider__text">
                                <h5 className="sect10__slider__text__h5">{el.name}</h5>
                                <p className="sect10__slider__text__p">от {el.price} сум</p>
                            </div>

                            <div className="sect10__slider__btn">
                                
                                <button className="sect10__slider__btn1">Купить</button>
                            </div>
                            <br />
                        </div>
                        </Link>
                        )
                    })}
                </div> 
                  
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    {/* FT code end */}
    </>
  )
}


export default Sect10