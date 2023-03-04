import React from 'react'
import { Link } from 'react-router-dom'
import "../Sect3/Sect3.css"

const Sect3 = ({data}) => {

    const cheh = data?.filter(el => el.name === "iPhone 13 Pro Max Silicone Case")
    const cheh1 = data?.filter(el => el.name === "45W MagSafe Power Adapter")
    const cheh3 = data?.filter(el => el.name === "GoPro HERO10 Black")
    const cheh4 = data?.filter(el => el.name === "USB-C Charge Cable")
    const cheh5 = data?.filter(el => el.name === "Watch Braided Solo Loop")

  return (
    <>
     {/* FT code start */}
     <section>
                <div className="container">
                    <h1 className='sect3__h1'><b>Аксессуары</b></h1>
                    <div className="sect3__otadiv">

                        {cheh?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Чехлы и стекла</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/a45d049f-57d7-4bff-8948-1d5d0d41a386"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}


                        {cheh1?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Зарядчики</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/2f6a6ba0-1bcc-470a-9983-9f32c6f87b7a"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })} 

                        {cheh3?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Прочие аксессуары</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/6b1ef09a-d67b-4072-922d-f7d1e1a8ae0d"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })} 
        
                        {cheh4?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Аксессуары Apple</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/c90e40ab-c68f-4ccc-89ea-c7c0bed9fe60"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })} 

                        {cheh4?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Сумки для Ноутбуков</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/bdfc7746-6549-4e55-b6b8-7efdaa3aac96"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })} 

                        {cheh5?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Ремешки Watch</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/eececf7d-5811-4dc4-97ee-1f4a46c269d6"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })} 

                    </div>
                </div>
            </section>

        {/* FT code end */}
    </>
  )
}

export default Sect3