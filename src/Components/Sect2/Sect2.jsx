import React from 'react'
import { Link } from 'react-router-dom'
import "../Sect2/Sect2.css"

const Sect2 = ({data}) => {

    const aks = data?.filter(el => el.name === "HomePod (2nd generation)")
    const aks1 = data?.filter(el => el.name === "Beats Studio 3")
    const aks3 = data?.filter(el => el.name === "Clip 3")
    const aks4 = data?.filter(el => el.name === "Harman Cardon Aura Studio 3")
    const aks5 = data?.filter(el => el.name === "Marshall Stanmore II")
    const aks6 = data?.filter(el => el.image === "https://cdn.macbro.uz/macbro/11c61c4b-838b-452d-96de-78d48829bc93")
    const aks7 = data?.filter(el => el.name === "Умная колонка Яндекс.Станция Макс")
    const aks8 = data?.filter(el => el.name === "2E SoundXTube")

  return (
    <>
         {/* FT code start */}
         <section>
                <div className="container">
                    <h1 className='sect2__h1'><b>Акустика</b></h1>
                    <div className="sect2__otadiv">
                        {aks?.map((el) => {
                            return ( 
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>{el.desc}</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks1?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>{el.desc}</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img2' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks3?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>JBL</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks4?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>Harman Kardon</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img3' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks5?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>Marshall</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks6?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>Nillkin</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img4' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks7?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>Yandex</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img5' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}

                        {aks8?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect2__otadiv__card" key={el._id}>
                                <h4 className='sect2__otadiv__card__h4'>2E</h4>
                            <div className="sect2__otadiv__card__img1">
                                <img className='sect2__otadiv__card__img' src={el.image} alt="" />
                            </div>
                            </div>
                        </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="sect2__img1">
                        <img className='sect2__img' src={"https://cdn.macbro.uz/macbro/1bfffc3a-bc1d-4336-a80a-efc2bd3fee73"} alt="" />
                    </div>
                </div>
            </section><br />
        {/* FT code end */}
    </>
  )
}

export default Sect2